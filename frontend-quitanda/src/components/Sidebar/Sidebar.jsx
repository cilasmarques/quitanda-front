import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
      <MenuContainer>
        {SidebarItems.map((item, index) => {
          if (user) {
            return item.rolePermission.includes(user.rolePermission) ? (
              <MenuItemLink key={item.name} to={item.route}>
                <SidebarItem active={index === activeIndex}>
                  {<item.icon />}
                  {item.name}
                </SidebarItem>
              </MenuItemLink>
            ) : (
              ""
            );
          }
        })}

        {user ? (
          <SidebarItem onClick={signOut}>
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
