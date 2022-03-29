import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

import { LocalStorageKeys } from "../enums/local-storage-keys-enum";
import { useLocalStorage } from "../hooks/useLocalStorage";
// import axios from "axios";
// import { api } from "../services/Api";

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

  // useEffect(() => {
	// 	if (user) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
	// 	}
	// }, [user]);

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
