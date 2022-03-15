import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const BoxContainer = styled.div`
  flex-direction: column;
  text-align: center;

  width: 71.5rem;
  height: 42.8rem;
  
  background-color: #e5ddcb;
  border-radius: 0.5rem;
`;

export const Header = styled.header`
  padding-top: 1.2rem;
  padding-bottom: 1.5rem;
`;

export const Title = styled.h2`
  color: #252733;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: "Mulish", "Roboto";
  font-style: normal;
  opacity: 0.85;
  line-height: 1.8rem;
  letter-spacing: 0.4px;
  text-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`;

export const FormComponents = styled.div`
  width: 100%;
  height: 28rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Footer = styled.div`
  margin-top: 2rem;
  height: 7rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormLink = styled.a`
  color: #863e03;
`;
