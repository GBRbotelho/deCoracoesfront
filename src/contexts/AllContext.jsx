import React from "react";
import { FlashMessageProvider } from "./FlashMessageContext";
import { AuthProvider } from "./AuthContext";

const AllContextsProvider = ({ children }) => (
  <AuthProvider>
    <FlashMessageProvider>{children}</FlashMessageProvider>
  </AuthProvider>
);

export default AllContextsProvider;
