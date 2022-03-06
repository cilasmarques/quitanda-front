import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: 16rem;

  background-color: ${(props) => props.theme.colors.primary.main};
  border: 5px solid ${(props) => props.theme.colors.primary.second};

  box-sizing: border-box;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary.text};
  font-weight: 700;
  font-size: 1.5rem;
  font-family: "Mulish", "Roboto";
  font-style: normal;
  opacity: 0.7;
  line-height: 1.8rem;
  letter-spacing: 0.4px;
  text-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled(Link)`
  text-decoration: none;
`;

export const SidebarItem = styled.div`
  padding: 20px 24px;
  transition: all 0.25s ease-in-out;
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.3px;
  letter-spacing: 0.4px;

  display: flex;
  align-items: center;

  background: ${(props) =>
    props.active ? props.theme.colors.primary.second : ""};

  color: ${(props) => props.theme.colors.primary.text};

  &:hover {
    background: ${(props) => props.theme.colors.primary.second};
    cursor: pointer;
  }

  &:not(:first-child) {
    border-top: 1px solid rgba(223, 225, 235, 0.1);
    margin-top: 0.4rem;
  }

  &:hover:not(:first-child) {
    background: #c34a36;
  }

  > svg {
    opacity: 40%;
    margin-right: 1.3rem;
  }
`;
