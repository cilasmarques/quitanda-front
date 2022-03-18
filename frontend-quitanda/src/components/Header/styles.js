import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  background: ${(props) => props.theme.colors.primary.container};
  border-radius: 0.3rem;
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
`;

export const Divider = styled.div`
  border-left: 1px solid #38546d;
  margin: 0.3rem 0;
  height: 30px;
  margin-right: 0.5rem;
`;

export const Title = styled.div`
  font-family: "Mulish";
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.875rem;
  letter-spacing: 0.3px;
`;

export const NavAuthLink = styled(Link)`
  font-family: "Mulish";
  font-style: normal;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0 0.5rem;
  letter-spacing: 0.2px;
  color: ${(props) => props.theme.colors.primary.linktext};
`;

export const BoxLink = styled.div`
  display: flex;
  align-items: center;
`;
