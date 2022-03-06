import React from "react";
import { Route, Routes } from "react-router-dom";

// PAGES
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";

// ADMIN PAGES
import Dashboard from "../../pages/Dashboard";
import UserList from "../../pages/UserList";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const DashboardRoutes = () => {
  return (
    <Sidebar>
      <Routes>
        {/* <Route
        render={(props) => ( */}
        <Route index element={<Dashboard />} />

        <Route path="/admin">
          <Route path="usuarios" element={<UserList />} />
          <Route path=":id/edit" element={<Profile />} />
        </Route>

        <Route path="/perfil">
          <Route path=":name" element={<Profile />} />
          <Route path=":name/edit" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound to="/dashboard" />} />
        {/* )}
      /> */}
      </Routes>
    </Sidebar>
  );
};
