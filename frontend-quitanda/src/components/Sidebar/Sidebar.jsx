import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";

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

export const Sidebar = () => {
  const location = useLocation();

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

      <MenuContainer>
        {SidebarItems.map((item, index) => {
          return (
            <MenuItemLink key={item.name} to={item.route}>
              <SidebarItem active={index === activeIndex}>
                {<item.icon />}
                {item.name}
              </SidebarItem>
            </MenuItemLink>
          );
        })}

        {/* <SidebarItem>
          <MdExitToApp />
          Sair
        </SidebarItem> */}
      </MenuContainer>
    </Container>
  );
};
