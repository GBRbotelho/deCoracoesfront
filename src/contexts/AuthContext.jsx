import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const saveToken = (token) => {
    sessionStorage.setItem("accessToken", token);
    setToken(token);
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
