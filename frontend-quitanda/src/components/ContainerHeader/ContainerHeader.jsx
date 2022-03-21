import React from "react";
import PropTypes from "prop-types";

// STYLES
import { Container, TitleContainer, Controllers } from "./styles";

export const ContainerHeader = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
      </TitleContainer>

      <Controllers>{children}</Controllers>
    </Container>
  );
};

ContainerHeader.defaultProps = {
  title: "Error",
  children: undefined,
};

ContainerHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
