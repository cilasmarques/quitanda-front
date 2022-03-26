import React, { createContext, useContext, useEffect, useState } from "react";

import { LocalStorageKeys } from "../enums/local-storage-keys-enum";

const initalState = {
  user: {},
  setUser: () => {},
  signOut: () => {},
}

export const AuthContext = createContext(initalState);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let u = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
    if (!u) {
      localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(u));
    } 
  }, []);

  const signOut = () => {
    localStorage.clear();
    setUser(null);
  };

  const authProviderData = {
    user,
    setUser,
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
