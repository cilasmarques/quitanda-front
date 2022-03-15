import React from "react";
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";

// STYLES
import {
  Container,
  BoxContainer,
  Header,
  Title,
  FormComponents,
  Footer
} from "./styles";

const Products = () => {
  return (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Produtos</Title>
        </Header>

        <FormComponents>
          <InputWrapper placeholder='Link rede social 01'/>
          <InputWrapper placeholder='Link rede social 02'/>
          <InputWrapper placeholder='Link rede social 03'/>
          <InputWrapper placeholder='Comprovante de MEI'/>
          <InputWrapper placeholder='CPF/CNPJ'/>
          <InputWrapper placeholder='Data de nascimento (DD/MM/AAAA)'/>
        </FormComponents>

        <Footer>
          <ButtonWrapper variant="form">Voltar</ButtonWrapper>
          <ButtonWrapper variant="form">Realizar cadastro</ButtonWrapper>
        </Footer>
      </BoxContainer>
    </Container>
    );
};

export default Products;