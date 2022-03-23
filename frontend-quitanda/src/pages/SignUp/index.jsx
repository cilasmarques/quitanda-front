import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputWrapper from "../../components/Input/Input";
import ButtonWrapper from "../../components/Button/Button";

// ENUMS
import {LocalStorageKeys} from "../../enums/local-storage-keys-enum";

// UTILS
import fieldsValidator from "../../utils/fieldsValidator";

// SERVICES
import { addUser } from "../../services/UserService";

// STYLES
import {
  Container,
  BoxContainer,
  Header,
  Title,
  Subtitle,
  FormComponents,
  Footer,
} from "./styles";

const REDIRECTION_PAGE = '/produtos';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [ceoName, setCeoName] = useState("");
  const [ocupationArea, setOcupationArea] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [socialNetwork1, setSocialNetwork1] = useState("");
  const [socialNetwork2, setSocialNetwork2] = useState("");
  const [socialNetwork3, setSocialNetwork3] = useState("");
  const [switchScreen, setSwitchScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleValidateField = (field) => {
    return !fieldsValidator.isUndefined(field) && !fieldsValidator.isEmpty(field) && !fieldsValidator.isNumeric(field);
  };

  const handleNextPage = () => {
    const validFields = handleValidateField(email) && handleValidateField(username) && handleValidateField(password) &&
      handleValidateField(confirmPassword) && handleValidateField(businessName) && handleValidateField(ceoName) && handleValidateField(ocupationArea);

    if (!email.includes("@"))
      alert("Email inválido :(");
    else if (confirmPassword !== password)
      alert("As senhas estão diferentes :(");
    else if (validFields)
      setSwitchScreen(!switchScreen);
    else
      alert("Verifique todos os campos obrigatórios!");
  };

  const handleAddUser = async () => {
    const validFields_page1 = handleValidateField(email) && handleValidateField(username) && handleValidateField(password) &&
      handleValidateField(confirmPassword) && handleValidateField(businessName) && handleValidateField(ceoName) && handleValidateField(ocupationArea);

    const validFields_page2 = handleValidateField(businessDescription) && handleValidateField(socialNetwork1);

    if (validFields_page1 && validFields_page2) {
      const result = await addUser({
        "username": username,
        "email": email,
        "password": password,
        "name": ceoName,
        "business_name": businessName,
        "ocupation_area": ocupationArea,
        "business_description": businessDescription,
        "social_network_1": socialNetwork1,
        "social_network_2": handleValidateField(socialNetwork2) ? socialNetwork2 : null,
        "social_network_3": handleValidateField(socialNetwork3) ? socialNetwork3 : null,
        "profile_picture": URL.createObjectURL(selectedImage)
      })

      if (result.status === 201 && confirm("Usuário cadastrado com sucesso!")) {
        const user = result.data.new_user
        localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(user));
        navigate(REDIRECTION_PAGE);
      }
    }
    else if (validFields_page1 && !validFields_page2)
      alert("Verifique todos os campos obrigatórios!");
    else {
      alert("Verifique todos os campos obrigatórios!\Lembre-se de também verificar a página anterior.");
    }
  }

  const firstScreen = (
    <Container>
      <BoxContainer>
        <Header>
          <Title>Cadastro</Title>
          <Subtitle>Campos com '*' são obrigatórios</Subtitle>
        </Header>

        <FormComponents>
          <InputWrapper required placeholder='Email*' value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
          <InputWrapper required placeholder='Nome de usuário*' value={username} onChange={(e) => setUsername(e.target.value)} />
          <InputWrapper required placeholder='Senha*' value={password} variant='password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <InputWrapper required placeholder='Confirmar Senha*' value={confirmPassword} variant='password' type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
          <InputWrapper required placeholder='Nome da empresa/negócio*' value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
          <InputWrapper required placeholder='Nome do responsável pela empresa/negócio*' value={ceoName} onChange={(e) => setCeoName(e.target.value)} />
          <InputWrapper required placeholder='Ramo de atividade*' value={ocupationArea} onChange={(e) => setOcupationArea(e.target.value)} />
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
          <Subtitle>Campos com '*' são obrigatórios</Subtitle>
        </Header>

        <FormComponents>
          <InputWrapper required placeholder='Descrição da empresa/negócio *' value={businessDescription} onChange={(e) => setBusinessDescription(e.target.value)} />
          <InputWrapper required placeholder='Link rede social 01 *' value={socialNetwork1} onChange={(e) => setSocialNetwork1(e.target.value)} />
          <InputWrapper placeholder='Link rede social 02' value={socialNetwork2} onChange={(e) => setSocialNetwork2(e.target.value)} />
          <InputWrapper placeholder='Link rede social 03' value={socialNetwork3} onChange={(e) => setSocialNetwork3(e.target.value)} />
          <div>
            <span>Foto de perfil: </span>
            <input variant='file' type='file' accept="image/png image/jpg image/jpeg" placeholder="Imagem de perfil*" onChange={(e) => setSelectedImage(e.target.files[0])}/>
          </div>
          {/* <InputWrapper variant='file' type='file' accept="image/png image/jpg image/jpeg" placeholder="Imagem de perfil*" onChange={(e) => setSelectedImage(e.target.files[0])}/>  */}
          {/* <InputWrapper placeholder='Comprovante de MEI' /> */}
          {/* <InputWrapper placeholder='CPF/CNPJ' /> */}
          {/* <InputWrapper placeholder='Data de nascimento (DD/MM/AAAA)' /> */}
        </FormComponents>

        <Footer>
          <ButtonWrapper variant="form" onClick={handleNextPage} >Voltar</ButtonWrapper>
          <ButtonWrapper variant="form" onClick={handleAddUser}>Realizar cadastro</ButtonWrapper>
        </Footer>
      </BoxContainer>
    </Container>
  )

  return (
    <Fragment>
      {switchScreen ? secondScreen : firstScreen}
    </Fragment>
  );
};

export default SignUpPage;
