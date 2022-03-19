import { BrowserRouter } from 'react-router-dom';

// CONTEXT
// import { useAuth } from '../contexts/auth.context';

// ENUMS
import { LocalStorageKeys } from '../enums/local-storage-keys-enum';

// COMPONENTS
import { DashboardRoutes } from './DashboardRoutes/router';
import { AuthRoutes } from './AuthRoutes/router';

export const Routes = () => {
  // const { user } = useAuth();

  const isAuthenticated = () => {
    return true
    // const userLocalStorage = !!localStorage.getItem(LocalStorageKeys.USER);
    // return !!user || userLocalStorage;
  };

  return (
    <BrowserRouter>
      {isAuthenticated() ? <DashboardRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};
