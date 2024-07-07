import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };