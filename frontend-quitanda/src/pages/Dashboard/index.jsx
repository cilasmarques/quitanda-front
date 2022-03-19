import React, { useRef, useState } from "react";

import Carousel from "../../components/Carousel/Carousel";

import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

import docinho from "../../assets/docinho.jpeg";
import povo from "../../assets/povo.jpeg";
import jarro from "../../assets/jarro.jpeg";

import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { Root, SearchInput, Content, CarouselButton } from "./styles";
import { CarouselHeader } from "../../components/CarouselHeader/CarouselHeader";
import Card, { CardBody, CardMedia } from "../../components/Card/Card";

export const Dashboard = () => {
  const [artistController, setArtistController] = useState(0);
  const [eventController, setEventController] = useState(0);
  const [productController, setProductController] = useState(0);
  const artistRef = useRef();
  const eventRef = useRef();
  const productRef = useRef();

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

          <CarouselButton
            onClick={() =>
              setArtistController(artistRef.current.getActiveIndex() - 1)
            }
          >
            <MdOutlineArrowBackIos />
          </CarouselButton>
          <CarouselButton
            onClick={() =>
              setArtistController(artistRef.current.getActiveIndex() + 1)
            }
          >
            <MdOutlineArrowForwardIos />
          </CarouselButton>
        </CarouselHeader>

        <Content>
          <Carousel move={artistController} carouselRef={artistRef}>
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
          <CarouselButton
            onClick={() =>
              setEventController(eventRef.current.getActiveIndex() - 1)
            }
          >
            <MdOutlineArrowBackIos />
          </CarouselButton>
          <CarouselButton
            onClick={() =>
              setEventController(eventRef.current.getActiveIndex() + 1)
            }
          >
            <MdOutlineArrowForwardIos />
          </CarouselButton>
        </CarouselHeader>
        <Content>
          <Carousel move={eventController} carouselRef={eventRef}>
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

          <CarouselButton
            onClick={() =>
              setProductController(productRef.current.getActiveIndex() - 1)
            }
          >
            <MdOutlineArrowBackIos />
          </CarouselButton>
          <CarouselButton
            onClick={() =>
              setProductController(productRef.current.getActiveIndex() + 1)
            }
          >
            <MdOutlineArrowForwardIos />
          </CarouselButton>
        </CarouselHeader>
        <Content>
          <Carousel move={productController} carouselRef={productRef}>
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
            </Card>
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
            </Card>
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
            </Card>
          </Carousel>
        </Content>
      </Container>
    </Root>
  );
};

export default Dashboard;
