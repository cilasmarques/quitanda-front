import React, { useState } from "react";
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

const override = css`
  display: block;
  margin: 0 auto;
`;

export const Profile = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  return (
    <Root>
      <Header title="Perfil" />
      <Container>
        <ContainerHeader title="Sobre" />

        <Content>
          <Card title="Nome do comercio">
            <CardMedia image={docinho} size="large" />
          </Card>

          <Description>
            <h3> Descricao sobre o negocio</h3>
            <AddressInfo>
              <span>CEP: 58410-258 </span>
              <span>Rua: Aluisio Cunha Lima,450</span>
              <span>Bairro: Catolé</span>
            </AddressInfo>
            <SocialNetworkInfo>
              <span>Numero de contato: (83) 9.9999-9999 </span>
              <span> Link rede social 01: instagram@</span>
              <span> Link rede social 02: instagram@</span>
              <span> Link rede social 03: instagram@</span>
            </SocialNetworkInfo>
          </Description>

          <Description>
            <h3> Dados de Validação</h3>
            <AdminInfo>
              <span>Email</span>
              <span>Senha</span>
              <span>Responsavel</span>
              <span>Ramo de atividade</span>
              <span>Comprovante MEI</span>
              <span>CPF/CNPJ</span>
              <span>Data de nascimento</span>
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
              {art.map((a, index) => {
                return (
                  <Card key={index} title={a.title}>
                    <CardMedia image={a.image} size={a.size} />
                    <CardBody color={a.color}>
                      <h6>{a.superTitle}</h6>
                      <Link to={`/profile/${a.link}`}>
                        <h6>{a.link}</h6>
                      </Link>
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
