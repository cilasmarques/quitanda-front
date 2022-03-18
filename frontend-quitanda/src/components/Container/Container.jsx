import React from "react";
import PropTypes from "prop-types";

// STYLES
import { Wrapper } from "./styles";

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Container.defaultProps = {
  title: "Error",
  children: undefined,
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
