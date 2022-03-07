import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest'
import GlobalStyleComposed from '../../styles/GlobalStyle.jsx';
import ThemeProvider from '../../styles/ThemeProvider.jsx';
import { Sidebar } from './Sidebar.jsx';

const SIDEBAR_COMPONENT = (
  <ThemeProvider>
    <BrowserRouter>
      <GlobalStyleComposed />
      <Sidebar />
    </BrowserRouter>
  </ThemeProvider>
);

describe("Sidebar component", async () => {
  test("Sidebar component should be defined", () => {
    render(SIDEBAR_COMPONENT);

    expect(SIDEBAR_COMPONENT).toBeDefined();
  });

  test("Sidebar component should has Quitanda's title", () => {
    render(SIDEBAR_COMPONENT);

    const sidebarTitle = screen.getByText("Quitanda");
    expect(sidebarTitle).toBeInTheDocument();
  });

  test("Sidebar component should has all always present options", () => {
    render(SIDEBAR_COMPONENT);

    const dashboardOption = screen.getByText("Dashboard");
    expect(dashboardOption).toBeInTheDocument();
    const profileOption = screen.getByText("Perfil");
    expect(profileOption).toBeInTheDocument();
    const logoutOption = screen.getByText("Sair");
    expect(logoutOption).toBeInTheDocument();
  });

  // //Teste futuro: opções quando o usuario for o default
  // test("Sidebar component shouldn't has the users option when the user is default", () => {
  //   render(SIDEBAR_COMPONENT);

  //   const usersOption = screen.getByText("Usuários");
  //   expect(usersOption).not().toBeInTheDocument();
  // });
  
  // //Teste futuro: opções quando o usuario for o admin
  // test("Sidebar component should has the users option when the user is the admin", () => {
  //   render(SIDEBAR_COMPONENT);

  //   const usersOption = screen.getByText("Usuários");
  //   expect(usersOption).toBeInTheDocument();
  // });
})

// !! Documentação para testes: https://pt-br.reactjs.org/docs/testing-recipes.html

// Opções do expect:
// getBytext - procura pelo texto e retorna (caso nao encontre, lança um erro)
// queryBytext  - procura pelo texto e retorna (caso nao encontre, retorna null)
// findBytext - retorna uma promise (caso encontre, retorna o elemento)
