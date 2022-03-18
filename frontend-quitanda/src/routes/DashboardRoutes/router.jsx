import React from "react";
import { Route, Routes } from "react-router-dom";

// PAGES
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";

// ADMIN PAGES
import Dashboard from "../../pages/Dashboard";
import UserList from "../../pages/UserList";
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

        <Route path="/admin/usuarios">
          <Route index element={<UserList />} />
          <Route path=":id/edit" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound to="/dashboard" />} />
      </Routes>
    </Layout>
  );
};
