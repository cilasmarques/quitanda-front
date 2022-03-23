import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";
import Card, { CardBody, CardMedia } from "../../components/Card/Card";

import jarro from "../../assets/jarro.jpeg";

// ENUMS
import {LocalStorageKeys} from "../../enums/local-storage-keys-enum";

// SERVICES
import { addProduct } from "../../services/ProductService.jsx";

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
  const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [initialProductList, setInitialProductList] = useState([]);
  const [currentProductList, setCurrentProductList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // useEffect(() => { //TODO - FAZER O FETCH AQUI
  //   const loadData = async () => {
  //     let result = await getAllProducts("Ascending", 1);
  //     let allProducts = result.data.products
  //     setInitialProductList(allProducts);
  //     setCurrentProductList(allProducts);
  //   }

  //   loadData();
  // }, []);

  const handleValidateField = (field) => {
    return !fieldsValidator.isUndefined(field) && !fieldsValidator.isEmpty(field) && !fieldsValidator.isNumeric(field);
  };

  const handleAddProductsOnList = () => {
    const validFields = handleValidateField(productName) && handleValidateField(productDescription) && handleValidateField(productPrice);
    const alreadyExists = currentProductList.find(product => product.name === productName && product.description === productDescription);

    let image = "";
    if (selectedImage) {
      image = URL.createObjectURL(selectedImage);
    } else {      
      alert("Você esqueceu de adicionar uma imagem do produto!");
      return
    }

    if (!user) {
      alert("Você precisa estar registrado para adicionar um produto!");
      navigate(REDIRECTION_PAGE);
    }
    else if (validFields && !alreadyExists && user._id) {
      let product = { 
        'name': productName, 
        'description': productDescription, 
        'price': `R$: ${productPrice.toFixed(2)}`, 
        'images': image,
        'user_id': user._id
      };
      setCurrentProductList(previousState => [...previousState, product]);
    }
    else if (alreadyExists)
      alert("Esse produto já está cadastrado");
    else
      alert("Opa! alguma informação está estranha :/");
  }

  const handleRemoveProductsOnList = (product) => {
    if (confirm("Deseja remover esse produto da lista?")) {
      const newProductList = currentProductList.filter(p => p.name !== product.name);
      setCurrentProductList(newProductList);
    }
  }

  const handleAddProducts = async () => { //TODO - implementar isso aqui
    let removedProducts = initialProductList.filter(p => !currentProductList.includes(p));
    let addedProducts = currentProductList.filter(p => !initialProductList.includes(p));

    if (addedProducts.length > 0) {
      let result = await addProduct(addedProducts);
      if (result.status === 201 && confirm("Lista de produtos cadastrada com sucesso!")) {
        navigate(REDIRECTION_PAGE);
      } else {
        alert("Falha ao cadastrar a lista de produtos.");
      }
    } 
    else {
      alert("Nenhum produto foi adicionado.");
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
          <InputWrapper value={productName} placeholder='Nome do produto*' onChange={(e) => setProductName(e.target.value)} />
          <InputWrapper value={productDescription} placeholder='Descrição do produto*' onChange={(e) => setProductDescription(e.target.value)} />
          <InputWrapper value={productPrice} placeholder='Preço do produto*' type="number" step="0.05" onChange={(e) => setProductPrice(+e.target.value)} />

          <ButtonsInline>
            <input variant='file' type='file' accept="image/png image/jpg image/jpeg" placeholder="Imagem do produto*" onChange={(e) => setSelectedImage(e.target.files[0])}/>
            {/* <InputWrapper variant='file' type='file' accept="image/png image/jpg image/jpeg" placeholder="Imagem do produto*" onChange={(e) => setSelectedImage(e.target.files[0])}/>  */}
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
          <ButtonWrapper onClick={handleAddProducts} variant="form">Cadastrar produtos</ButtonWrapper>
        </Footer>
      </BoxContainer>
    </Container >
  );
};

export default Products;