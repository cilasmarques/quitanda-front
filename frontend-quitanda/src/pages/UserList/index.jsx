import React from "react";
import { ContainerHeader } from "../../components/ContainerHeader/ContainerHeader";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Root } from "../Dashboard/styles";
import { Coluns, Content, Description } from "./styles";




export const UserList = () => {
  const handleListUsers = () => {
    const userList = [{
      'access_authorization': false,
      'address': null,
      'birthdate': null,
      'business_description': "Jarros para plantas personalizados",
      'business_name': "Seu Jarrinho",
      'contact_phone': null,
      'email': "mariajarrinho@gmail.com",
      'name': "Maria Eduarda",
      'ocupation_area': "Artesanato",
      'profile_picture': "blob:http://localhost:3000/93fa4c14-cbb7-402a-957b-5fb17bb538ce",
      'social_network_1': "@seu_jarrinho",
      'social_network_2': null,
      'social_network_3': null,
      'username': "mariajr",
      '_created_at': 1647881945.258395,
      '_id': "fb8642a42e35e32ef99d867ff4e3f8529ea5976c"
    },
    {
      'access_authorization': false,
      'address': null,
      'birthdate': null,
      'business_description': "Loja online de itens personalizados em resina",
      'business_name': "Resinar",
      'contact_phone': null,
      'email': "resinar@gmail.com",
      'name': "Priscilla Dantas",
      'ocupation_area': "Resina",
      'profile_picture': "blob:http://localhost:3000/ff63f9b5-d939-44fb-b1f1-1edc4c416e95",
      'social_network_1': "@rresinar",
      'social_network_2': null,
      'social_network_3': null,
      'username': "resinar",
      '_created_at': 1647882052.0636673,
      '_id': "5f89065ec8533460120411d249f2d67bc8cbb1b2"
    }]
    let rowList = [];
    if(userList){
      userList.map((user, index) => {
        rowList.push(

        )
      });
    }
    return rowList;
  }
  return (
    <Root>
      <Header title="UserList" />
      <Container>
        <ContainerHeader title="All users" />
        <Coluns>
          <h3>UserId</h3>
          <h3>Status</h3>
          <h3>Nome</h3>
          <h3>Username</h3>
          <h3>OutraCoisa</h3>
          <h3>Actions</h3>
        </Coluns>
        <Users>
          {handleListUsers().map((rowList) => rowList)}
        </Users>

      </Container>
    </Root>
  );
};

export default UserList;
