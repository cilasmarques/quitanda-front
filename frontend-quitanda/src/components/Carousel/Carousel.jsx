import React from "react";
import PropTypes from "prop-types";

// STYLES
import { Container } from "./styles";

export const Carousel = ({ children }) => {
  return <Container>{children}</Container>;
};

Carousel.defaultProps = {
  title: "Error",
  children: undefined,
};

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
