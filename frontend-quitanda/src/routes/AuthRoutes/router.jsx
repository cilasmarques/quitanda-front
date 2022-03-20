import { Routes as Switch, Route } from 'react-router-dom';

// PAGES
import Dashboard from "../../pages/Dashboard";
import SignInPage from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import Products from '../../pages/Products';
import NotFound from '../../pages/NotFound';

// COMPONENTS
import { Layout } from "../../components/Layout/Layout";



export const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Layout> <Dashboard /> </Layout>} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/cadastro" element={<SignUpPage />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
};