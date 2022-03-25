import React, { createContext, useContext, useEffect, useState } from "react";

import { LocalStorageKeys } from "../enums/local-storage-keys-enum";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      const localUser = localStorage.getItem(LocalStorageKeys.USER);
      if (localUser) {
        setUser(JSON.parse(localUser));
      }
    }
  }, []);

  const signOut = () => {
    localStorage.clear();
    setUser(null);
  };

  const authProviderData = {
    user,
    signOut,
  };

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
