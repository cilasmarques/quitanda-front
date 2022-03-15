import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const LoginBox = styled.div`
  flex-direction: column;

  width: 50rem;
  height: 31rem;
  
  background-color: #e5ddcb;
  border-radius: 0.5rem;
`;

export const Header = styled.header`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;
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

export const Subtitle = styled.p`
  color: #252733;
  font-weight: 350;
  font-size: 1rem;
  font-family: "Mulish", "Roboto";
  font-style: normal;
  line-height: 1.8rem;
  letter-spacing: 0.4px;
  margin-top: 1rem;
  text-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`;

export const FormComponents = styled.p`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Footer = styled.div`
  margin-top: 6.5rem;
  text-align: center;
`;

export const FormLink = styled.a`
  color: #863e03;
`;
