import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import ButtonWrapper from "../../components/Button/Button";

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

import { updateAccessAuthorization } from "../../services/UserService";
import { getProductsByUser } from "../../services/ProductService";
import { useAuth } from "../../contexts/AuthContext";

const override = css`
  display: block;
  margin: 0 auto;
`;

export const Profile = () => {
  const { user } = useAuth();
  const { name } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [profileProducts, setProfileProducts] = useState([]);
  const [profileData, setProfileData] = useState([]);


  useEffect(() => {
    const loadData = async () => {
      const result = await getProductsByUser(name);
      setProfileData(result.data.user_products);
      setProfileProducts(result.data.user_products.products);
    };
    loadData();
  }, []);

  const handleEditProfile = () => {
    navigate(`edit`, { state: { name: name } });
  };

  const handleReportUser = () => {
    alert("Usuário reportado");
  };

  const handleAcceptUser = async () => {
    if (confirm("Você realmente deseja aceitar esse usuário?")) {
      const result = await updateAccessAuthorization(name, "accepted");
      if (result && result.status === 200) {
        navigate('/usuarios');
      }
    }
  };

  const handleRejectUser = async () => {
    if (confirm("Você realmente deseja rejeitar esse usuário?")) {
      const result = await updateAccessAuthorization(name, "rejected");
      if (result && result.status === 200) {
        navigate('/usuarios');
      }
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
            {user && (user.user.username === name) && (
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
                    <CardMedia src={product.image} />
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
