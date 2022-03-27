import React from "react";
import { Route, Routes } from "react-router-dom";

// PAGES
import Profile from "../../pages/Profile";
import Products from "../../pages/Products";
import NotFound from "../../pages/NotFound";
import Dashboard from "../../pages/Dashboard";
import SignUpPage from "../../pages/SignUp";
// ADMIN PAGES
import UserList from "../../pages/UserList";

// COMPONENTS
import { Layout } from "../../components/Layout/Layout";

export const DashboardRoutes = () => {
  console.log("dashboard rotas");
  return (
    <Routes>
      <Route
        index
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route path="/perfil">
        <Route
          path=":name"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route path=":name/edit" element={<SignUpPage />} />
        <Route path=":name/check" element={<Profile />} />
        <Route path=":name/edit/produtos" element={<Products />} />
      </Route>

      <Route
        path="/usuarios"
        element={
          <Layout>
            <UserList />
          </Layout>
        }
      />

      <Route path="/admin/usuarios">
        <Route
          index
          element={
            <Layout>
              <UserList />
            </Layout>
          }
        />
        {/* <Route path=":name/validate" element={<Profile />} />   É REALMENTE NECESSÁRIO ? O CARA NUM VAI SÓ APERTAR O BOTÃO ?*/}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
