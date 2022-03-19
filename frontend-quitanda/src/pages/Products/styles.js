import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const BoxContainer = styled.div`
  width: 90%;
  height: 90%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  background-color: #e5ddcb;
  border-radius: 2%;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  margin-bottom: 0%;
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

export const FormComponents = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Footer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const FormLink = styled.a`
  color: #863e03;
`;

export const ButtonsInline = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const CardContent = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: scroll; /* Add vertical scrollbar */
  max-height: 37vh;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
`