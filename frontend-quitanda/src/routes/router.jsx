import { BrowserRouter } from 'react-router-dom';

// CONTEXT
// import { useAuth } from '../contexts/auth.context';

// ENUMS
import { LocalStorageKeys } from '../enums/local-storage-keys-enum';
// COMPONENTS
// import { DashboardRoutes } from './DashboardRoutes/router';
import { AuthRoutes } from './AuthRoutes/router';
import { ProductRoutes } from './ProductRoutes/router';

export const Routes = () => {
	// const { user } = useAuth();

	const isAuthenticated = () => {
    return false
		// const userLocalStorage = !!localStorage.getItem(LocalStorageKeys.USER);
		// return !!user || userLocalStorage;
	};

	return (
		<BrowserRouter>
      {/* <AuthRoutes /> */}
      {/* <DashboardRoutes /> */}
        {/* {isAuthenticated() ? <DashboardRoutes /> : <AuthRoutes />} */}
        {isAuthenticated() ? <ProductRoutes/> : <AuthRoutes />}
      {/* <ProductRoutes/> */}
		</BrowserRouter>
	);
};
