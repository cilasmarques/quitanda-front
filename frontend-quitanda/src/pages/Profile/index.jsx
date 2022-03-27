import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import ButtonWrapper from "../../components/Button/Button";

// ENUMS
import { LocalStorageKeys } from "../../enums/local-storage-keys-enum";

import Card, { CardMedia, CardBody } from "../../components/Card/Card";
import {
  Root,
  Content,
  ProductContainer,
  Description,
  AddressInfo,
  SocialNetworkInfo,
  AdminInfo,
  Controllers,
} from "./style";
import { ContainerHeader } from "../../components/ContainerHeader/ContainerHeader";
import { SearchInput } from "../../components/Input/SearchInput";
import { css } from "@emotion/react";
import { SyncLoader } from "react-spinners/";
import { art } from "../Dashboard/item";

import { getProductsByUser } from "../../services/ProductService";
import { useAuth } from "../../contexts/AuthContext";

const override = css`
  display: block;
  margin: 0 auto;
`;

export const Profile = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [profileProducts, setProfileProducts] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [loggedUserData, setLoggedUserData] = useState({}); //So um teste: localStorage.setItem("@user", JSON.stringify({'_id': '205f154a88fecf6e78f1bdae9c08848d3f72dd72', username:"tecendoredes", name:"Fátima Batista"}))
  const [userIsAdmin, setUserIsAdmin] = useState(false); //mudar isso dps

  const { user } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      const result = await getProductsByUser(name);
      setProfileData(result.data.user_products);
      setProfileProducts(result.data.user_products.products);

      const userData = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
      if (userData) {
        setLoggedUserData(userData);
      }
    };
    loadData();
  }, []);

  const handleEditProfile = () => {
    navigate(`edit`, { name: name });
  };

  const handleReportUser = () => {
    alert("Usuário reportado");
  };

  const handleAcceptUser = () => {
    if (confirm("Você realmente deseja aceitar esse usuário?")) {
      //Atualizar o usuário aqui
    }
  };

  const handleRejectUser = () => {
    if (confirm("Você realmente deseja rejeitar esse usuário?")) {
      //Atualizar o usuário aqui
    }
  };

  return (
    <Root>
      <Header title="Perfil" />
      <Container>
        <ContainerHeader title="Sobre" />
        <Content>
          <div style={{ display: "flex" }}>
            <Card title={profileData.business_name}>
              <CardMedia src={profileData.profile_picture} />
            </Card>

            <Description>
              <h3>{profileData.business_description}</h3>
              <SocialNetworkInfo>
                <span>Link rede social 01: {profileData.social_network_1}</span>
                {profileData.social_network_2 && (
                  <span>
                    Link rede social 02: {profileData.social_network_2}
                  </span>
                )}
                {profileData.social_network_3 && (
                  <span>
                    Link rede social 03: {profileData.social_network_3}
                  </span>
                )}
              </SocialNetworkInfo>
            </Description>

            {user && user.rolePermission === "admin" ? (
              <Description>
                <h3> Dados de Validação</h3>
                <AdminInfo>
                  <span>Email: {profileData.email}</span>
                  <span>Responsavel : {profileData.name}</span>
                  <span>Ramo de atividade: {profileData.ocupation_area}</span>
                </AdminInfo>
              </Description>
            ) : (
              ""
            )}
          </div>
          <Controllers>
            {user && user.rolePermission === "admin" && (
              <ButtonWrapper variant="slim" onClick={handleAcceptUser}>
                Accept
              </ButtonWrapper>
            )}
            {user && user.rolePermission === "admin" && (
              <ButtonWrapper variant="slim" onClick={handleRejectUser}>
                Reject
              </ButtonWrapper>
            )}
            {user && user.user === name && (
              <ButtonWrapper variant="slim" onClick={handleEditProfile}>
                Edit
              </ButtonWrapper>
            )}
            <ButtonWrapper variant="slim" onClick={handleReportUser}>
              Report
            </ButtonWrapper>
          </Controllers>
        </Content>
      </Container>

      <Container>
        <ContainerHeader title="Produtos">
          <SearchInput>
            <div className="search">
              <div>
                <input type="text" placeholder="Pesquisar..." />
              </div>
            </div>
          </SearchInput>
        </ContainerHeader>

        <ProductContainer>
          {loading ? (
            <SyncLoader
              color="#000"
              loading={loading}
              css={override}
              size={15}
            />
          ) : (
            <>
              {profileProducts.map((product, index) => {
                return (
                  <Card key={index} title={product.name}>
                    <CardMedia src={product.images} />
                    <CardBody>
                      <p>{product.price}</p>
                      <p>{product.description}</p>
                    </CardBody>
                  </Card>
                );
              })}
            </>
          )}
        </ProductContainer>
      </Container>
    </Root>
  );
};

export default Profile;
