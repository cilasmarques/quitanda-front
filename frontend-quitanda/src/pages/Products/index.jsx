import React from "react";
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";
import Card, { CardBody, CardMedia } from "../../components/Card/Card";

import jarro from "../../assets/jarro.jpeg";

// STYLES
import {
  Container,
  BoxContainer,
  Header,
  Title,
  FormComponents,
  ButtonsInline,
  CardContent,
  CardRow,
  Footer
} from "./styles";

const PRODUCTS = [
  { 'nome': 'Cachaça artesanal', 'preco': 'R$31,00' },
  { 'nome': 'Cachaça artesanal', 'preco': 'R$30,00' },
  { 'nome': 'Cachaça artesanal', 'preco': 'R$32,00' },
  { 'nome': 'Cachaça artesanal', 'preco': 'R$33,00' },
  { 'nome': 'Cachaça artesanal', 'preco': 'R$34,00' },
  { 'nome': 'Cachaça artesanal', 'preco': 'R$35,00' },
  { 'nome': 'Cachaça artesanal', 'preco': 'R$36,00' },
  { 'nome': 'Cachaça artesanal', 'preco': 'R$37,00' },
  { 'nome': 'Cachaça artesanal', 'preco': 'R$38,00' },
  { 'nome': 'Cachaça artesanal', 'preco': 'R$39,00' },
];

const Products = () => {

  const handleListProducts = () => {
    let lineProductsList = [];
    let generalProductsList = [];

    PRODUCTS.map((product, index) => {
      lineProductsList.push(
        <Card title={product.nome} key={index}>
          <CardMedia image={jarro} size="default" />
          <CardBody color="black">
            <p> Preço: {product.preco} </p>
            <p> Ver Detalhes </p>
          </CardBody>
        </Card>
      )

      if ((index + 1) % 5 === 0) {
        generalProductsList.push(lineProductsList);
        lineProductsList = [];
      }
    })

    return generalProductsList;
  }

  return (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Produtos</Title>
        </Header>

        <FormComponents>
          <InputWrapper placeholder='Nome do produto' />
          <InputWrapper placeholder='Descrição do produto' />
          <InputWrapper placeholder='Preço do produto' />

          <ButtonsInline>
            <ButtonWrapper>Upload photo</ButtonWrapper>  {/* Botao de upload de imagem */}
            <ButtonWrapper>Adicionar produto</ButtonWrapper>
          </ButtonsInline>

          <CardContent>
            {handleListProducts().map((cardlist, index) => (
              <CardRow key={index}>
                {cardlist}
              </CardRow>
            ))}
          </CardContent>
        </FormComponents>

        <Footer>
          <ButtonWrapper variant="form">Cadastrar produtos</ButtonWrapper>
        </Footer>
      </BoxContainer>
    </Container >
  );
};

export default Products;