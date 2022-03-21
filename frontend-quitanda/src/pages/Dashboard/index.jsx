import React, { useRef, useState } from "react";

import Carousel from "../../components/Carousel/Carousel";

import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

import { art, event, products } from "./item";

import { SearchInput } from "../../components/Input/SearchInput";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { Root, Content, CarouselButton } from "./styles";
import { ContainerHeader } from "../../components/ContainerHeader/ContainerHeader";
import Card, { CardBody, CardMedia } from "../../components/Card/Card";
import { Link } from "react-router-dom";

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
        <ContainerHeader title="Artistas">
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
        </ContainerHeader>

        <Content>
          <Carousel move={artistController} carouselRef={artistRef}>
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
          </Carousel>
        </Content>
      </Container>

      <Container>
        <ContainerHeader title="Eventos">
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
        </ContainerHeader>
        <Content>
          <Carousel move={eventController} carouselRef={eventRef}>
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
          </Carousel>
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
        </ContainerHeader>
        <Content>
          <Carousel move={productController} carouselRef={productRef}>
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
          </Carousel>
        </Content>
      </Container>
    </Root>
  );
};

export default Dashboard;
