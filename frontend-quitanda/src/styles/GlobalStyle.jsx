import React from "react";
import { createGlobalStyle } from "styled-components";
import wallpaper from "../assets/wallpaper.png";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Mulish', sans-serif;
	}

	html, body, #root {
		height: 100vh;
		background: url(${wallpaper}) no-repeat center center fixed; 
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		overflow: hidden ;
	}
	*, button, input {
		border: 0;
		outline: 0;
		font-family: 'Mulish', sans-serif;
	}
	button {
		cursor: pointer;
	}
`;

const GlobalStyleComposed = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default GlobalStyleComposed;
