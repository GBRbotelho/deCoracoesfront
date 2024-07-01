import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("null");
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
