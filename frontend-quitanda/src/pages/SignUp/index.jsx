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
  Footer,
} from "./styles";

const SignUpPage = () => {
  return (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <FormComponents>
          <InputWrapper placeholder='Email'/>
          <InputWrapper placeholder='Senha' variant='password' type='password' required/>
          <InputWrapper placeholder='Confirmar Senha' variant='password' type='password' required/>
          <InputWrapper placeholder='Nome da empresa/negócio'/>
          <InputWrapper placeholder='Nome do responsável pela empresa/negócio'/>
          <InputWrapper placeholder='Ramo de atividade'/>
          <InputWrapper placeholder='Descrição da empresa/negócio'/>
          {/* <ButtonWrapper>Upload</ButtonWrapper>  */} {/* Botao de upload de imagem */}
        </FormComponents>

        <Footer>
          <ButtonWrapper variant="form">Próximo</ButtonWrapper>
        </Footer>
      </BoxContainer>
    </Container>
    );
};

export default SignUpPage;
