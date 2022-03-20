import { Routes as Switch, Route } from 'react-router-dom';

// COMPONENTS
import SignInPage  from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import Products from '../../pages/Products';
import NotFound from '../../pages/NotFound';

export const AuthRoutes = () => {
	return (
		<Switch>
			<Route path="/" element={<SignInPage />} />
			<Route path="/cadastro" element={<SignUpPage />} />
      <Route path="/produtos" element={<Products />} />
			<Route path="*" element={<NotFound />} />
		</Switch>
	);
};