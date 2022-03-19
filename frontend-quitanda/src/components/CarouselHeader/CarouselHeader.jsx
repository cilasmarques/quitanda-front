import React from "react";
import PropTypes from "prop-types";

// STYLES
import { Container, TitleContainer, Controllers } from "./styles";

export const CarouselHeader = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
      </TitleContainer>

      <Controllers>{children}</Controllers>
    </Container>
  );
};

CarouselHeader.defaultProps = {
  title: "Error",
  children: undefined,
};

CarouselHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
