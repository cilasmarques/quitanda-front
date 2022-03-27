import React from "react";
import { Root, StyledContainer } from "./style";
import ButtonWrapper from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Root>
      <StyledContainer>
        <h1>404</h1>

        <span> NOT FOUND</span>
        <Link to={"/"}>
          <ButtonWrapper style={{ width: "300px" }} variant="form">
            Voltar
          </ButtonWrapper>
        </Link>
      </StyledContainer>
    </Root>
  );
};

export default NotFound;
