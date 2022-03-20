import React from "react";
import { Route, Routes } from "react-router-dom";

// PAGES
import Profile from "../../pages/Profile";
import Products from '../../pages/Products';
import NotFound from "../../pages/NotFound";
import Dashboard from "../../pages/Dashboard";

// ADMIN PAGES
import UserList from "../../pages/UserList";

// COMPONENTS
import { Layout } from "../../components/Layout/Layout";

export const DashboardRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Dashboard />} />

        <Route path="/perfil">
          <Route index element={<Profile />} />
          <Route path=":name/edit" element={<Profile />} />
        </Route>

        <Route path="/produtos"> {/* Só é acessada quando clica no botão de 'edit' na tela de perfil */}
          <Route index element={<Products />} />
        </Route>

        <Route path="/admin/usuarios">
          <Route index element={<UserList />} />
          <Route path=":id/edit" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound to="/dashboard" />} />
      </Routes>
    </Layout>
  );
};
