import React from "react";
import PropTypes from "prop-types";

// STYLES
import { Container, Title, Divider, NavAuthLink, BoxLink } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

export const Header = ({ title }) => {
  const { user } = useAuth();

  return (
    <Container>
      <Title>{title}</Title>
      <BoxLink>
        {!user ? (
          <>
            <Divider />
            <NavAuthLink to="/login">Login</NavAuthLink>

            <NavAuthLink to="/cadastro">Cadastre-se</NavAuthLink>
          </>
        ) : (
          ""
        )}
      </BoxLink>
    </Container>
  );
};

Header.defaultProps = {
  title: "Error",
};

Header.propTypes = {
  title: PropTypes.string,
};
