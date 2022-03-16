import { Routes as Switch, Route } from 'react-router-dom';

// COMPONENTS
import SignInPage  from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import NotFound from '../../pages/NotFound';

export const AuthRoutes = () => {
	return (
		<Switch>
			<Route path="/" element={<SignInPage />} />
			<Route path="/signup" element={<SignUpPage />} />
			<Route path="*" element={<NotFound />} />
		</Switch>
	);
};