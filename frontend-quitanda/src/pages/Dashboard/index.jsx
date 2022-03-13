import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Header } from "../../components/Header/Header";
import { Carousel } from "../../components/Carousel/Carousel";
import { Container, SearchInput, CarouselButton, Content } from "./styles";
import { CarouselHeader } from "../../components/CarouselHeader/CarouselHeader";
import Card from "../../components/Card/Card";

export const Dashboard = () => {
  return (
    <Container>
      <Header title="Dashboard" />

      <Carousel>
        <CarouselHeader title="Artistas">
          <SearchInput>
            <div className="search">
              <div>
                <input type="text" placeholder="Pesquisar..." />
              </div>
            </div>
          </SearchInput>

          <CarouselButton>
            <IoIosArrowBack />
          </CarouselButton>

          <CarouselButton>
            <IoIosArrowForward />
          </CarouselButton>
        </CarouselHeader>

        <Content>
          <Card title="Juinin"></Card>
          <Card title="Jogo Campinense x Treze"></Card>
          <Card title="Cachaça artesanal"></Card>
          <Card title="Cachaça artesanal"></Card>
        </Content>
      </Carousel>

      <Carousel>
        <CarouselHeader title="Eventos">
          <SearchInput>
            <div className="search">
              <div>
                <input type="text" placeholder="Pesquisar..." />
              </div>
            </div>
          </SearchInput>

          <CarouselButton>
            <IoIosArrowBack />
          </CarouselButton>

          <CarouselButton>
            <IoIosArrowForward />
          </CarouselButton>
        </CarouselHeader>
        <Content>
          <Card title="Juinin"></Card>
          <Card title="Jogo Campinense x Treze"></Card>
          <Card title="Cachaça artesanal"></Card>
        </Content>
      </Carousel>

      <Carousel>
        <CarouselHeader title="Produtos">
          <SearchInput>
            <div className="search">
              <div>
                <input type="text" placeholder="Pesquisar..." />
              </div>
            </div>
          </SearchInput>

          <CarouselButton>
            <IoIosArrowBack />
          </CarouselButton>

          <CarouselButton>
            <IoIosArrowForward />
          </CarouselButton>
        </CarouselHeader>
        <Content>
          <Card title="Juinin"></Card>
          <Card title="Jogo Campinense x Treze"></Card>
          <Card title="Cachaça artesanal"></Card>
        </Content>
      </Carousel>
    </Container>
  );
};

export default Dashboard;
