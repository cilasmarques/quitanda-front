import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { getUserByUsername } from "../../services/UserService";

const REDIRECTION_PAGE = '/produtos';

export const Profile = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState();

  useEffect(() => {
    // const loadData = async () => {
    //   const u = await getUserByUsername("nomeDoUsuario");
    //   if (u.products.length == 0)
        navigate(REDIRECTION_PAGE);
    //   else
    //     setUser(u);
    // }

    // loadData();
  }, [])

  return <Header title="Perfil" />;
};

export default Profile;
