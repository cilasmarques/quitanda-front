import React from "react";
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";

// STYLES
import {
  Container,
  LoginBox,
  Header,
  Title,
  Subtitle,
  FormComponents,
  Footer,
  FormLink
} from "./styles";

const SignInPage = () => {
  return (
    <Container>
      <LoginBox>
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
          <span>Não tem uma conta? <FormLink>Crie uma!</FormLink> </span>
        </Footer>
      </LoginBox>
    </Container>
    );
};

export default SignInPage;
