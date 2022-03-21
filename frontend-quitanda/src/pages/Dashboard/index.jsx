import React, { useEffect, useRef, useState } from "react";

import Carousel from "../../components/Carousel/Carousel";

import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

import { art } from "./item";
import docinho from "../../assets/docinho.jpeg";

import { SearchInput } from "../../components/Input/SearchInput";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { ContainerHeader } from "../../components/ContainerHeader/ContainerHeader";
import Card, { CardBody, CardMedia } from "../../components/Card/Card";
import { Link } from "react-router-dom";

//STYLES
import { Root, Content, CarouselButton } from "./styles";

//COMPONENTS
import { getAllUsers } from "../../services/UserService";
import { getAllProducts } from "../../services/ProductService";

export const Dashboard = () => {
  const [artistController, setArtistController] = useState(0);
  const [eventController, setEventController] = useState(0);
  const [productController, setProductController] = useState(0);
  const artistRef = useRef();
  const eventRef = useRef();
  const productRef = useRef();

  const [usersList, setUsersList] = useState([
    { name: "teste", ocupation_area: "teste" },
  ]);
  const [productsList, setProductsList] = useState([
    { name: "teste", description: "teste", price: "2" },
  ]);
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const usersResult = await getAllUsers("Ascending", 1);
      const productsResult = await getAllProducts("Ascending", 1);

      setUsersList(usersResult.data.users);
      setProductsList(productsResult.data.products);
    };

    loadData();
  }, []);

  const handleListUsers = () => {
    let cardList = [];
    let listLimit = 15;

    if (usersList) {
      usersList.map((user, index) => {
        cardList.push(
          <Card title={user.name} key={index}>
            <CardMedia image={docinho} size="default" />
            {/* TODO - pegar a imagem do backend*/}
            <CardBody color="black">
              <p> {user.ocupation_area} </p>
              <Link to={`/perfil/${user.name}`}>
                <p> Ver Detalhes </p>
              </Link>
              {/* TODO - colocar Link de redirecionamento  */}
            </CardBody>
          </Card>
        );
      });
    }
    return cardList;
  };

  const handleListProducts = () => {
    let cardList = [];
    let listLimit = 15;

    if (productsList) {
      productsList.map((product, index) => {
        cardList.push(
          <Card title={product.name} key={index}>
            {/* <CardMedia image={jarro} size="default" />  */}
            {/* TODO - pegar a imagem do backend*/}
            <CardMedia src={product.images} />
            <CardBody color="black">
              <p> Preço: {product.price} </p>
              <p> Descrição: {product.description} </p>
              <Link to={`/perfil`}>
                <p> Ver Detalhes </p>
              </Link>
              {/* TODO - colocar Link de redirecionamento  */}
            </CardBody>
          </Card>
        );
      });
    }
    return cardList;
  };

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
            {handleListUsers().map((cardlist) => cardlist)}
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
            {handleListProducts().map((cardlist) => cardlist)}
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
                    <Link to={`/perfil`}>
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
