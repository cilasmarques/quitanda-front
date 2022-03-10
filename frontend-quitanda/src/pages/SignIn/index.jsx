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
  BottomText,
  FormLink
} from "./styles";

export const SignInPage = () => {
  return (
    <Container>
      <LoginBox>
        <Header>
          <Title>Quitanda</Title>
          <Subtitle>Insira seu nome de usuário e sua senha nos campos abaixo</Subtitle>
        </Header>

        <FormComponents>
          <InputWrapper placeholder='Nome de usuário'/>
          <InputWrapper variant='password' placeholder='Senha'/>
          <ButtonWrapper variant="form">Sign In</ButtonWrapper>
        </FormComponents>

        <BottomText>
          <span>Não tem uma conta? <FormLink>Crie uma!</FormLink> </span>
        </BottomText>
      </LoginBox>
    </Container>
    );
};

export default SignInPage;
