import React, { Fragment } from "react";
import { useState } from "react";
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
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [companyName, setCompanyName] = useState();
  const [ceoName, setCeoName] = useState(); 
  const [companyRole, setCompanyRole] = useState();
  const [switchScreen, setSwitchScreen] = useState(false);
  
  const handleNextPage = () => { setSwitchScreen(!switchScreen) };
  
  const handleSetEmail = (e) => {
    /*Fazer validação */
    setEmail(e.target.value)
  };
  


  const firstScreen = (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <FormComponents>
          <InputWrapper placeholder='Email' onChange={handleSetEmail}/>
          <InputWrapper placeholder='Nome de usuário' />
          <InputWrapper placeholder='Senha' variant='password' type='password' required />
          <InputWrapper placeholder='Confirmar Senha' variant='password' type='password' required />
          <InputWrapper placeholder='Nome da empresa/negócio' />
          <InputWrapper placeholder='Nome do responsável pela empresa/negócio' />
          <InputWrapper placeholder='Ramo de atividade' />
          {/* <ButtonWrapper>Upload</ButtonWrapper>  */} {/* Botao de upload de imagem */}
        </FormComponents>

        <Footer>
          <ButtonWrapper variant="form" onClick={handleNextPage}>Próximo</ButtonWrapper>
        </Footer>
      </BoxContainer>
    </Container>

  )

  const secondScreen = (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Validação</Title>
        </Header>

        <FormComponents>
          <InputWrapper placeholder='Descrição da empresa/negócio' />
          <InputWrapper placeholder='Link rede social 01' />
          <InputWrapper placeholder='Link rede social 02' />
          <InputWrapper placeholder='Link rede social 03' />
          <InputWrapper placeholder='Comprovante de MEI' />
          <InputWrapper placeholder='CPF/CNPJ' />
          <InputWrapper placeholder='Data de nascimento (DD/MM/AAAA)' />
        </FormComponents>

        <Footer>
          <ButtonWrapper variant="form" onClick={handleNextPage} >Voltar</ButtonWrapper>
          <ButtonWrapper variant="form">Realizar cadastro</ButtonWrapper>
        </Footer>
      </BoxContainer>
    </Container>
  )

  return (
    <Fragment>{switchScreen ? secondScreen : firstScreen}</Fragment>
  );
};

export default SignUpPage;




