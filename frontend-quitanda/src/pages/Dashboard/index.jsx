import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

import Carousel from "../../components/Carousel/Carousel";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { ContainerHeader } from "../../components/ContainerHeader/ContainerHeader";
import Card, { CardBody, CardMedia } from "../../components/Card/Card";

//STYLES
import { Root, Content, CarouselButton } from "./styles";

//COMPONENTS
import { getAllValidUsers } from "../../services/UserService";
import { getAllProductsWithPagination } from "../../services/ProductService";

export const Dashboard = () => {
  const [artistController, setArtistController] = useState(0);
  const [productController, setProductController] = useState(0);
  const artistRef = useRef();
  const productRef = useRef();

  const [usersList, setUsersList] = useState([
    { name: "loading", ocupation_area: "loading" },
  ]);
  const [productsList, setProductsList] = useState([
    { name: "loading", description: "loading", price: "R$: 0.00" },
  ]);

  useEffect(() => {
    const loadData = async () => {
      const usersResult = await getAllValidUsers();
      const productsResult = await getAllProductsWithPagination("Ascending", 1);

      let auxUserList = usersResult.data.valid_users_list;
      let auxProductList = productsResult.data.products;
      let validUsersIds = auxUserList.map((user) => user._id);
      let validProducts = auxProductList.filter((product) =>  validUsersIds.includes(product.user_id));
  
      setUsersList(auxUserList);
      setProductsList(validProducts);
    };

    loadData();
  }, []);

  const handleListUsers = () => {
    let cardList = [];

    if (usersList) {
      usersList.map((user, index) => {
        cardList.push(
          <Card title={user.name} key={index}>
            <CardMedia src={user.profile_picture} />
            <CardBody color="black">
              <p> {user.ocupation_area} </p>
              <Link to={`/perfil/${user.username}`}>
                <p> Ver Detalhes </p>
              </Link>
            </CardBody>
          </Card>
        );
      });
    }
    return cardList;
  };

  const handleListProducts = () => {
    let cardList = [];

    if (productsList) {
      productsList.map((product, index) => {
        cardList.push(
          <Card title={product.name} key={index}>
            <CardMedia src={product.images} />
            <CardBody color="black">
              <p> Preço: {product.price} </p>
              <p> {product.description} </p>
              <Link to={`/perfil/`}> {/** Alterar aqui */}
                <p> Ver Detalhes </p>
              </Link>
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
    </Root>
  );
};

export default Dashboard;
