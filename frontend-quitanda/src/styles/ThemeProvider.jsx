import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ThemeNames = {
  light: "light",
  ocean: "dark",
};

const light = {
  colors: {
    primary: {
      main: "#61210B",
      second: "#C25110",
      container: "#E5DDCB",
      card: "#DFE0EB",
      white: "#FFFFFF",
      black: "#000000",
      linktext: "#252733",
    },
    danger: {
      main: "#F12B2C",
      second: "#b22a00",
      text: "#FFFFFF",
    },
  },
};

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#1b1f38",
        dark: "#252a48",
        light: "#313862",
        text: "#fff",
      },
    },
  },
};

const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={allThemes[theme]}>{children}</StyledProvider>
);

ThemeProvider.defaultProps = {
  theme: "light",
};

export default ThemeProvider;
