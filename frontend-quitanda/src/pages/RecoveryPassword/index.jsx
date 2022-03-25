import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";

// STYLES
import {
  Container,
  BoxContainer,
  Header,
  Title,
  Subtitle,
} from "./styles";

const LOGIN_PATH = "/login"

const RecoveryPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleRecoveryPassword = () => {
    if (!email.includes("@") || !email.includes(".")) {
      alert("Email inválido :(");
    } else {
      const result = 201;      //Requisição ao backend aqui
      if (result == 201 && confirm("Sua senha foi enviada para seu e-mail!")) {
        navigate(LOGIN_PATH);
      }
    }
  }

  return (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Quitanda</Title>
          <Subtitle>Insira abaixo o email com o qual a conta foi criada</Subtitle>
        </Header>

        <InputWrapper placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <ButtonWrapper variant="form" onClick={handleRecoveryPassword}>Recuperar senha</ButtonWrapper>
      </BoxContainer>
    </Container>
  );
};

export default RecoveryPassword;
