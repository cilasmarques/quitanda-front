import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//COMPONENTS
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";

//SERVICES
import { loginAdmin, loginUser } from "../../services/AuthService";

//CONTEXT
import { useAuth } from "../../contexts/AuthContext";

// STYLES
import {
  Container,
  BoxContainer,
  Header,
  Title,
  Subtitle,
  FormComponents,
  Footer,
  FormLink,
} from "./styles";

const SIGNUP_PATH = "/cadastro";
const FORGOT_PASSWORD_PATH = "/recuperarSenha";

const SignInPage = () => {
  const { setUser } = useAuth();
  const params = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (username === "") {
      alert("Username inválido");
    } else if (password === "") {
      alert("Senha inválida");
    } else {
      let result = null;
      let rolePermission = null;
      if (params.pathname.includes("admin")) {
        result = await loginAdmin(username, password);
        rolePermission = 'admin';
      } else {
        result = await loginUser(username, password);
        rolePermission = 'user';
      }

      if (result.status === 200) {
        setUser({
          user: result.data.user,
          token: result.data.token,
          rolePermission: rolePermission
        });
        navigate("/");
      } else {
        alert("Falha no login");
      }
    }
  };

  return (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Quitanda</Title>
          <Subtitle>
            Insira seu nome de usuário e sua senha nos campos abaixo
          </Subtitle>
        </Header>

        <FormComponents>
          <InputWrapper
            placeholder="Nome de usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputWrapper
            placeholder="Senha"
            variant="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonWrapper variant="form" onClick={handleLogin}>
            Sign In
          </ButtonWrapper>
        </FormComponents>

        <Footer>
          <span>
            Esqueceu a senha?
            <FormLink to={FORGOT_PASSWORD_PATH}>Recuperar senha!</FormLink>
          </span>
          <span>
            Não tem uma conta? <FormLink to={SIGNUP_PATH}>Crie uma!</FormLink>
          </span>
        </Footer>
      </BoxContainer>
    </Container>
  );
};

export default SignInPage;
