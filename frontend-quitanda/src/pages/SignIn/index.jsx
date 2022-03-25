import React from "react";
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";

// STYLES
import {
  Container,
  BoxContainer,
  Header,
  Title,
  Subtitle,
  FormComponents,
  Footer,
  FormLink
} from "./styles";

const SIGNUP_PATH = "/cadastro"
const FORGOT_PASSWORD_PATH = "/recuperarSenha"

const SignInPage = () => {
  return (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Quitanda</Title>
          <Subtitle>Insira seu nome de usuário e sua senha nos campos abaixo</Subtitle>
        </Header>

        <FormComponents>
          <InputWrapper placeholder='Nome de usuário'/>
          <InputWrapper placeholder='Senha' variant='password' type='password' required/>
          <ButtonWrapper variant="form">Sign In</ButtonWrapper>
        </FormComponents>

        <Footer>
          <span>Esqueceu a senha? <FormLink href={FORGOT_PASSWORD_PATH} >Recuperar senha!</FormLink> </span>
          <span>Não tem uma conta? <FormLink href={SIGNUP_PATH} >Crie uma!</FormLink> </span>
        </Footer>
      </BoxContainer>
    </Container>
    );
};

export default SignInPage;
