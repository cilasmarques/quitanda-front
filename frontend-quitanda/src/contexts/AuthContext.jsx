import React, { createContext, useContext, useEffect, useMemo } from "react";

import { LocalStorageKeys } from "../enums/local-storage-keys-enum";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage(LocalStorageKeys.USER, null);
  useEffect(() => {
    if (!user) {
      const localUser = localStorage.getItem(LocalStorageKeys.USER);
      if (localUser) {
        setUser(JSON.parse(user));
      }
    }
  }, []);

  const signOut = () => {
    setUser(null);
  };

  const authProviderData = useMemo(
    () => ({
      user,
      setUser,
      signOut,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={authProviderData}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
