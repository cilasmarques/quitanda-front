import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { ContainerHeader } from "../../components/ContainerHeader/ContainerHeader";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Root } from "../Dashboard/styles";
import { Coluns, Content, Description } from "./styles";

import { getAllUsers, deleteUserByUsername } from '../../services/UserService';

export const UserList = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [updateUserList, setUpdateUserList] = useState(true);

  useEffect(() => {
    if (updateUserList) {
      loadUserList();
    }
  }, [updateUserList]);

  const loadUserList = async () => {
    const result = await getAllUsers();
    if (result && result.data.users_list) {
      setUserList(result.data.users_list);
      setUpdateUserList(false);
    }
  }

  const handleDeleteUser = async (username) => {
    if (confirm("Você realmente deseja deletar esse usuário?")) {
      const result = await deleteUserByUsername(username);
      if (result && result.status === 200) {
        alert("Usuário deletado com sucesso!");
        setUpdateUserList(true);
      }
    }
  }

  const handleCheckUser = async (username) => {
    navigate(`/perfil/${username}/check`, {name: username});
  }  

  return (
    <Root>
      <Header title="UserList" />
      <Container>
        <ContainerHeader title="All users" />
        <Coluns>
          <div>
            <h3>UserId</h3>
            {userList.map((user, index) => (<p key={index}> {user.email}</p>))}
          </div>

          <div>
            <h3>Status</h3>
            {userList.map((user, index) => (<p key={index}> {(user.access_authorization === true) ? "Approved" : "To review"} </p>))}
          </div>

          <div>
            <h3>Nome do negócio</h3>
            {userList.map((user, index) => (<p key={index}> {user.business_name}</p>))}
          </div>

          <div>
            <h3>Username</h3>
            {userList.map((user, index) => (<p key={index}> {user.username}</p>))}
          </div>

          <div>
            <h3>Actions</h3>
            {userList.map((user, index) => (
              <div key={index}>
                <button
                  onClick={() => handleCheckUser(user.username)}
                  style={{ marginRight: "2px", backgroundColor: "darkblue", color: "white" }}
                >
                  CHECK
                </button>
                <button
                  onClick={() => handleDeleteUser(user.username)}
                  style={{ marginLeft: "2px", backgroundColor: "darkred", color: "white" }}
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </Coluns>
      </Container>
    </Root>
  );
};

export default UserList;
