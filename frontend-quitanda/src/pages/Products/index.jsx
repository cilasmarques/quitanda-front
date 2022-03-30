import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";
import Card, { CardBody, CardMedia } from "../../components/Card/Card";

// CONTEXT
import { useAuth } from "../../contexts/AuthContext";

// SERVICES
import { addProduct, getProductsByUser, deleteProductsById } from "../../services/ProductService.jsx";

// UTILS
import fieldsValidator from "../../utils/fieldsValidator";

// STYLES
import {
  Container,
  BoxContainer,
  Header,
  Title,
  Subtitle,
  FormComponents,
  ButtonsInline,
  CardContent,
  CardRow,
  Footer
} from "./styles";

const REDIRECTION_PAGE = '/'

const Products = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation(); 
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [initialProductList, setInitialProductList] = useState([]);
  const [currentProductList, setCurrentProductList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditionRequest, setIsEditionRequest] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (user && user.user.username === state.name) {
        const result = await getProductsByUser(state.name);
        const products = result.data.user_products.products

        setIsEditionRequest(true);

        setInitialProductList(products);
        setCurrentProductList(products);
      }
    }
    loadData(); 
  }, []);

  const handleValidateField = (field) => {
    return !fieldsValidator.isUndefined(field) && !fieldsValidator.isEmpty(field);
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handleAddProductsOnList = async () => {
    const validFields = handleValidateField(productName) && handleValidateField(productDescription) && handleValidateField(productPrice);
    const alreadyExists = currentProductList.find(product => product.name === productName);

    let cUser = user ? user.user : state.registredUser;

    if (!cUser) {
      alert("Você precisa estar registrado para adicionar um produto!");
      navigate(REDIRECTION_PAGE);
    } else if (!productPrice) {
      alert("Você precisa adicionar o preço do produto!");
    } else if (!selectedImage) {
      alert("Você esqueceu de adicionar uma imagem do produto!");
    } else if (validFields && !alreadyExists && cUser._id) {
      const base64image = await getBase64(selectedImage); 
      let product = {
        'name': productName,
        'description': productDescription,
        'price': `R$: ${productPrice.toFixed(2)}`,
        'images': base64image,
        'user_id': cUser.username
      };
      setCurrentProductList(previousState => [...previousState, product]);
    } else if (alreadyExists) {
      alert("Esse produto já está cadastrado");
    } else {
      alert("Opa! alguma informação está estranha :/\nCampos 'nome' e 'descrição' não podem ser numéricos ou vazios");
    }
  }

  const handleRemoveProductsOnList = (product) => {
    if (confirm("Deseja remover esse produto da lista?")) {
      const newProductList = currentProductList.filter(p => p.name !== product.name);
      setCurrentProductList(newProductList);
    }
  }

  const handleProductsValidation = () => { //TODO - implementar isso aqui
    let removedProducts = initialProductList.filter(p => !currentProductList.includes(p));
    let addedProducts = currentProductList.filter(p => !initialProductList.includes(p));

    if (addedProducts.length > 0 || removedProducts.length > 0) {
      if (isEditionRequest) {
        handleSubmitUpdate(addedProducts, removedProducts);
      } else {
        handleSubmitCreate(addedProducts);
      }
    } else {
      alert("A lista de produtos não foi alterada.");
    }
  }

  const handleSubmitCreate = async (addedProducts) => {
    let result = await addProduct(addedProducts);
    if (result.status === 201 && confirm("Lista de produtos cadastrada com sucesso!")) {
      navigate(REDIRECTION_PAGE);
    } else {
      alert("Falha ao cadastrar a lista de produtos.");
    }
  }

  const handleSubmitUpdate = async (addedProducts, removedProducts) => { //AJEITAR ESSA REQUISIÇÃO NO BACKEND
    let result1 = await deleteProductsById(removedProducts) 
    let result2 = await addProduct(addedProducts);

    if (result1.status === 200 && result2.status === 201 && confirm("Lista de produtos atualizada com sucesso!")) {
      navigate(REDIRECTION_PAGE);
    } else {
      alert("Falha ao cadastrar a lista de produtos.");
    }
  }

  const handleListProducts = () => {
    let cardList = [];
    let productsList = [];
    let listSize = currentProductList.length;

    currentProductList.map((product, index) => {
      cardList.push(
        <Card title={product.name} key={index}>
          <CardMedia src={product.images} size="default" />
          <CardBody color="black">
            <p> Preço: {product.price} </p>
            <p> Descrição: {product.description} </p>
          </CardBody>
          <ButtonWrapper variant="slim" onClick={() => handleRemoveProductsOnList(product)}>Deletar</ButtonWrapper>
        </Card>
      )

      if (index === listSize - 1)
        productsList.push(cardList);
      else if ((index + 1) % 5 === 0) {
        productsList.push(cardList);
        cardList = [];
      }
    })

    return productsList;
  }

  return (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Produtos</Title>
          <Subtitle>Campos com '*' são obrigatórios.</Subtitle>
          <Subtitle>Os produtos só serão exibidos na plataforma após validação da staff.</Subtitle>
        </Header>

        <FormComponents>
          <InputWrapper placeholder='Nome do produto*' onChange={(e) => setProductName(e.target.value)} />
          <InputWrapper placeholder='Descrição do produto*' onChange={(e) => setProductDescription(e.target.value)} />
          <InputWrapper placeholder='Preço do produto*' type="number" step="0.05" onChange={(e) => setProductPrice(+e.target.value)} />

          <ButtonsInline>
            <input variant='file' type='file' accept="image/png image/jpg image/jpeg" placeholder="Imagem do produto*" onChange={(e) => setSelectedImage(e.target.files[0])} />
            <ButtonWrapper variant="slim" onClick={handleAddProductsOnList}>Adicionar produto</ButtonWrapper>
          </ButtonsInline>

          <Subtitle>Você tem {currentProductList.length} produtos cadastrados</Subtitle>

          <CardContent>
            {handleListProducts().map((cardlist, index) => (
              <CardRow key={index}>
                {cardlist}
              </CardRow>
            ))}
          </CardContent>
        </FormComponents>

        <Footer>
          <ButtonWrapper onClick={handleProductsValidation} variant="form">Cadastrar produtos</ButtonWrapper>
        </Footer>
      </BoxContainer>
    </Container >
  );
};

export default Products;