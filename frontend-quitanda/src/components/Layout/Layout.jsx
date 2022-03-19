import React from "react";

// COMPONENTS
import { Grid, Content } from "./styles";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout = ({ children }) => {
  return (
    <Grid>
      <Sidebar />
      <Content>{children}</Content>
    </Grid>
  );
};
