import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdExitToApp, MdDashboard } from "react-icons/md";

// STYLES
import {
  Container,
  MenuContainer,
  MenuItemLink,
  Title,
  SidebarTitle,
  SidebarItem,
} from "./styles";

import SidebarItems from "./SidebarItems";
import { useAuth } from "../../contexts/AuthContext";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex);

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(
      (item) => item.route === location.pathname
    );

    changeActiveIndex(activeItem);
  }, [location]);

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  const handleSignOut = () => {
    navigate('/');
    signOut();
  }

  return (
    <Container>
      <SidebarTitle>
        <Title>Quitanda</Title>
      </SidebarTitle>

      <MenuItemLink to={"/"}>
        <SidebarItem>
          <MdDashboard />
          Dashboard
        </SidebarItem>
      </MenuItemLink>

      {user && user.rolePermission.includes("user") && (
        <MenuItemLink to={`/perfil/${user.user.username}`}>
        <SidebarItem>
          <MdDashboard />
          Perfil
        </SidebarItem>
      </MenuItemLink>
      )}

      {user && user.rolePermission.includes("admin") && (
        <MenuItemLink to={"/usuarios"}>
          <SidebarItem>
            <MdDashboard />
            Usuários
          </SidebarItem>
        </MenuItemLink>
      )}

      <MenuContainer>
        {user ? (
          <SidebarItem onClick={handleSignOut}>
            <MdExitToApp />
            Sair
          </SidebarItem>
        ) : (
          ""
        )}
      </MenuContainer>
    </Container>
  );
};
