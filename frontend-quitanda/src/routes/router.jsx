import { BrowserRouter } from 'react-router-dom';

// CONTEXT
// import { useAuth } from '../contexts/auth.context';

// ENUMS
import { LocalStorageKeys } from '../enums/local-storage-keys-enum';

// COMPONENTS
import { DashboardRoutes } from './DashboardRoutes/router';
// import { AuthRoutes } from './AuthRoutes/router';

export const Routes = () => {
	// const { user } = useAuth();

	const isAuthenticated = () => {
		const userLocalStorage = !!localStorage.getItem(LocalStorageKeys.USER);
		return !!user || userLocalStorage;
	};

	return (
		<BrowserRouter>
		<DashboardRoutes />
			{/* {isAuthenticated() ? <DashboardRoutes /> : <AuthRoutes />} */}
		</BrowserRouter>
	);
};
