import { Routes as Switch, Route } from "react-router-dom";

// PAGES
import Dashboard from "../../pages/Dashboard";
import SignInPage from "../../pages/SignIn";
import SignUpPage from "../../pages/SignUp";
import Products from "../../pages/Products";
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";
import UserList from "../../pages/UserList";
import RecoveryPassword from "../../pages/RecoveryPassword";

// COMPONENTS
import { Layout } from "../../components/Layout/Layout";

export const AuthRoutes = () => {
  console.log("autorização rotas");
  return (
    <Switch>
      <Route path="/login">
        <Route index element={<SignInPage />} />
        <Route path="admin" element={<SignInPage />} />
      </Route>

      <Route path="/recuperarSenha" element={<RecoveryPassword />} />
      <Route path="/cadastro" element={<SignUpPage />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/"
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
      </Route>
    </Switch>
  );
};
