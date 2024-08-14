import React, { createContext, useContext, useState, useEffect } from "react";
import { UserFacotory } from "../factories/UserFactory";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const saveToken = async (token) => {
    sessionStorage.setItem("accessToken", token);
    const response = await UserFacotory.tokenData(token);
    if (response.success) {
      setToken(token);
      setUser(response.data);
    } else {
      logout();
    }
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const getTokenSession = sessionStorage.getItem("accessToken");
    if (getTokenSession) {
      saveToken(getTokenSession);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        saveToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
