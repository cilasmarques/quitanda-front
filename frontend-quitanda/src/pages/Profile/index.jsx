import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import docinho from "../../assets/docinho.jpeg";

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

const override = css`
  display: block;
  margin: 0 auto;
`;

export const Profile = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [userProducts, setUserProducts] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await getProductsByUser(name);
      console.log(result.data);
      setUserData(result.data.user_products);
      setUserProducts(result.data.user_products.products);
    }
    loadData();
  }, []);

  return (
    <Root>
      <Header title="Perfil" />
      <Container>
        <ContainerHeader title="Sobre" />

        <Content>
          <Card title={userData.business_name}>
            <CardMedia src={userData.profile_picture}/>
          </Card>

          <Description>
            <h3>{userData.business_description}</h3>
            {/* <AddressInfo> */}
              {/* <span>CEP: 58410-258 </span> */}
              {/* <span>Rua: Aluisio Cunha Lima,450</span> */}
              {/* <span>Bairro: Catolé</span> */}
            {/* </AddressInfo> */}
            <SocialNetworkInfo>
              {/* <span>Numero de contato: (83) 9.9999-9999 </span> */}
              <span> Link rede social 01: {userData.social_network_1}</span>
              {/* <span> Link rede social 02: instagram@</span> */}
              {/* <span> Link rede social 03: instagram@</span> */}
            </SocialNetworkInfo>
          </Description>

          <Description>
            <h3> Dados de Validação</h3>
            <AdminInfo>
              <span>Email: {userData.email}</span>
              {/* <span>Senha</span> */}
              <span>Responsavel : {userData.name}</span>
              <span>Ramo de atividade: {userData.ocupation_area}</span>
              {/* <span>Comprovante MEI</span> */}
              {/* <span>CPF/CNPJ</span> */}
              {/* <span>Data de nascimento</span> */}
            </AdminInfo>
          </Description>
        </Content>
        <Controllers></Controllers>
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
              {userProducts.map((product, index) => {
                // console.log(product);
                return (
                  <Card key={index} title={product.name}>
                    <CardMedia src={product.images}  />
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
