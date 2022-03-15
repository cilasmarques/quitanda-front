import React from "react";

import Carousel from "../../components/Carousel/index";

import docinho from "../../assets/docinho.jpeg";
import povo from "../../assets/povo.jpeg";
import jarro from "../../assets/jarro.jpeg";

import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { Root, SearchInput, Content } from "./styles";
import { CarouselHeader } from "../../components/CarouselHeader/CarouselHeader";
import Card, { CardBody, CardMedia } from "../../components/Card/Card";

export const Dashboard = () => {
  return (
    <Root>
      <Header title="Dashboard" />

      <Container>
        <CarouselHeader title="Artistas">
          <SearchInput>
            <div className="search">
              <div>
                <input type="text" placeholder="Pesquisar..." />
              </div>
            </div>
          </SearchInput>
        </CarouselHeader>

        <Content>
          <Carousel>
            <Card title="Junin">
              <CardMedia image={docinho} size="default" />
              <CardBody color="black">
                <h6>Artesão</h6>
                <h6>Ver perfil</h6>
              </CardBody>
            </Card>
            <Card title="Junin">
              <CardMedia image={docinho} size="default" />
              <CardBody color="black">
                <h6>Artesão</h6>
                <h6>Ver perfil</h6>
              </CardBody>
            </Card>
            <Card title="Junin">
              <CardMedia image={docinho} size="default" />
              <CardBody color="black">
                <h6>Artesão</h6>
                <h6>Ver perfil</h6>
              </CardBody>
            </Card>
            <Card title="Junin">
              <CardMedia image={docinho} size="default" />
              <CardBody color="black">
                <h6>Artesão</h6>
                <h6>Ver perfil</h6>
              </CardBody>
            </Card>
            <Card title="Junin">
              <CardMedia image={docinho} size="default" />
              <CardBody color="black">
                <h6>Artesão</h6>
                <h6>Ver perfil</h6>
              </CardBody>
            </Card>
            <Card title="Junin">
              <CardMedia image={docinho} size="default" />
              <CardBody color="black">
                <h6>Artesão</h6>
                <h6>Ver perfil</h6>
              </CardBody>
            </Card>
          </Carousel>
        </Content>
      </Container>

      <Container>
        <CarouselHeader title="Eventos">
          <SearchInput>
            <div className="search">
              <div>
                <input type="text" placeholder="Pesquisar..." />
              </div>
            </div>
          </SearchInput>
        </CarouselHeader>
        <Content>
          <Carousel>
            <Card title="Jogo Campinense x Treze">
              <CardMedia image={povo} size="default" />
              <CardBody color="black">
                <p>Local: Amigão </p>
                <p>Data e hora: 20/02/22 15:00</p>
                <p> Ver Detalhes </p>
              </CardBody>
            </Card>
            <Card title="Jogo Campinense x Treze">
              <CardMedia image={povo} size="default" />
              <CardBody color="black">
                <p>Local: Amigão </p>
                <p>Data e hora: 20/02/22 15:00</p>
                <p> Ver Detalhes </p>
              </CardBody>
            </Card>
            <Card title="Jogo Campinense x Treze">
              <CardMedia image={povo} size="default" />
              <CardBody color="black">
                <p>Local: Amigão </p>
                <p>Data e hora: 20/02/22 15:00</p>
                <p> Ver Detalhes </p>
              </CardBody>
            </Card>
            <Card title="Jogo Campinense x Treze">
              <CardMedia image={povo} size="default" />
              <CardBody color="black">
                <p>Local: Amigão </p>
                <p>Data e hora: 20/02/22 15:00</p>
                <p> Ver Detalhes </p>
              </CardBody>
            </Card>
            <Card title="Jogo Campinense x Treze">
              <CardMedia image={povo} size="default" />
              <CardBody color="black">
                <p>Local: Amigão </p>
                <p>Data e hora: 20/02/22 15:00</p>
                <p> Ver Detalhes </p>
              </CardBody>
            </Card>
            <Card title="Jogo Campinense x Treze">
              <CardMedia image={povo} size="default" />
              <CardBody color="black">
                <p>Local: Amigão </p>
                <p>Data e hora: 20/02/22 15:00</p>
                <p> Ver Detalhes </p>
              </CardBody>
            </Card>
            <Card title="Jogo Campinense x Treze">
              <CardMedia image={povo} size="default" />
              <CardBody color="black">
                <p>Local: Amigão </p>
                <p>Data e hora: 20/02/22 15:00</p>
                <p> Ver Detalhes </p>
              </CardBody>
            </Card>
          </Carousel>
        </Content>
      </Container>

      <Container>
        <CarouselHeader title="Produtos">
          <SearchInput>
            <div className="search">
              <div>
                <input type="text" placeholder="Pesquisar..." />
              </div>
            </div>
          </SearchInput>
        </CarouselHeader>
        <Content>
          <Carousel>
            <Card title="Cachaça artesanal">
              <CardMedia image={jarro} size="default" />
              <CardBody color="black">
                <p>Preço: R$30,00 </p>
                <p> Ver Detalhes </p>
                <p>Ver perfil do vendedor</p>
              </CardBody>
            </Card>
            <Card title="Cachaça artesanal">
              <CardMedia image={jarro} size="default" />
              <CardBody color="black">
                <p>Preço: R$30,00 </p>
                <p> Ver Detalhes </p>
                <p>Ver perfil do vendedor</p>
              </CardBody>
            </Card>{" "}
            <Card title="Cachaça artesanal">
              <CardMedia image={jarro} size="default" />
              <CardBody color="black">
                <p>Preço: R$30,00 </p>
                <p> Ver Detalhes </p>
                <p>Ver perfil do vendedor</p>
              </CardBody>
            </Card>{" "}
            <Card title="Cachaça artesanal">
              <CardMedia image={jarro} size="default" />
              <CardBody color="black">
                <p>Preço: R$30,00 </p>
                <p> Ver Detalhes </p>
                <p>Ver perfil do vendedor</p>
              </CardBody>
            </Card>{" "}
            <Card title="Cachaça artesanal">
              <CardMedia image={jarro} size="default" />
              <CardBody color="black">
                <p>Preço: R$30,00 </p>
                <p> Ver Detalhes </p>
                <p>Ver perfil do vendedor</p>
              </CardBody>
            </Card>{" "}
            <Card title="Cachaça artesanal">
              <CardMedia image={jarro} size="default" />
              <CardBody color="black">
                <p>Preço: R$30,00 </p>
                <p> Ver Detalhes </p>
                <p>Ver perfil do vendedor</p>
              </CardBody>
            </Card>
          </Carousel>
        </Content>
      </Container>
    </Root>
  );
};

export default Dashboard;
