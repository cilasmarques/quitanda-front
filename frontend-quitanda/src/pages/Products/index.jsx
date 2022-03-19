import React, { useEffect, useState } from "react";
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";
import Card, { CardBody, CardMedia } from "../../components/Card/Card";

import jarro from "../../assets/jarro.jpeg";

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

const PRODUCTS = [
  { 'name': 'Cachaça artesanal 0', 'description': 'descricao', 'price': 'R$30.00' },
  { 'name': 'Cachaça artesanal 1', 'description': 'descricao', 'price': 'R$31.00' },
  { 'name': 'Cachaça artesanal 2', 'description': 'descricao', 'price': 'R$32.00' },
  { 'name': 'Cachaça artesanal 3', 'description': 'descricao', 'price': 'R$33.00' },
  { 'name': 'Cachaça artesanal 4', 'description': 'descricao', 'price': 'R$34.00' },
  { 'name': 'Cachaça artesanal 5', 'description': 'descricao', 'price': 'R$35.00' },
  { 'name': 'Cachaça artesanal 6', 'description': 'descricao', 'price': 'R$36.00' },
  { 'name': 'Cachaça artesanal 7', 'description': 'descricao', 'price': 'R$37.00' },
  { 'name': 'Cachaça artesanal 8', 'description': 'descricao', 'price': 'R$38.00' },
  { 'name': 'Cachaça artesanal 9', 'description': 'descricao', 'price': 'R$39.00' },
];

const Products = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [initialProductList, setInitialProductList] = useState(PRODUCTS);
  const [currentProductList, setCurrentProductList] = useState(PRODUCTS);

  useEffect(() => { //TODO - FAZER O FETCH AQUI
    setInitialProductList(PRODUCTS);
    setCurrentProductList(PRODUCTS);
  }, [PRODUCTS]);

  // useEffect(() => { //TODO - remover isso aqui
  //   console.log(currentProductList);
  //   console.log(initialProductList);
  // }, [currentProductList, initialProductList]);

  const handleValidateField = (field) => {
    return !fieldsValidator.isUndefined(field) && !fieldsValidator.isEmpty(field) && !fieldsValidator.isNumeric(field);
  };

  const handleAddProductsOnList = () => {
    const validFields = handleValidateField(productName) && handleValidateField(productDescription) && handleValidateField(productPrice);
    const alreadyExists = currentProductList.find(product => product.name === productName && product.description === productDescription);

    if (validFields && !alreadyExists) {
      let product = { 'name': productName, 'description': productDescription, 'price': `R$: ${productPrice.toFixed(2)}` };
      setCurrentProductList(previousState => [...previousState, product]);
    }
    else if (alreadyExists)
      alert("Esse produto já está cadastrado");
    else
      alert("Opa! alguma informção esta estranha :/");
  }

  const handleRemoveProductsOnList = (product) => {
    if (confirm("Deseja remover esse produto da lista?")) {
      const newProductList = currentProductList.filter(p => p.name !== product.name);
      setCurrentProductList(newProductList);
    }
  }

  const handleAddProducts = () => { //TODO - implementar isso aqui
    let removedProducts = initialProductList.filter(p => !currentProductList.includes(p));
    let addedProducts = currentProductList.filter(p => !initialProductList.includes(p));
    console.log(removedProducts);
    console.log(addedProducts);
  }

  const handleListProducts = () => {
    let cardList = [];
    let productsList = [];
    let listSize = currentProductList.length;

    currentProductList.map((product, index) => {
      cardList.push(
        <Card title={product.name} key={index}>
          <CardMedia image={jarro} size="default" />
          <CardBody color="black">
            <p> Preço: {product.price} </p>
            <p> Ver Detalhes </p>
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
            <ButtonWrapper>Adicionar foto</ButtonWrapper>  {/* Botao de upload de imagem */}
            <ButtonWrapper onClick={handleAddProductsOnList}>Adicionar produto</ButtonWrapper>
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