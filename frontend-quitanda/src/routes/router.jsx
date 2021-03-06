import { BrowserRouter } from "react-router-dom";

// CONTEXT
import { useAuth } from "../contexts/AuthContext";

// ENUMS
import { LocalStorageKeys } from "../enums/local-storage-keys-enum";

// COMPONENTS
import { DashboardRoutes } from "./DashboardRoutes/router";
import { AuthRoutes } from "./AuthRoutes/router";

export const Routes = () => {
  const { user } = useAuth();

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <BrowserRouter>
      {isAuthenticated() ? <DashboardRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};
