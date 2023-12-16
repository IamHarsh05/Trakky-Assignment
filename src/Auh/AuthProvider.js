import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from "../Componet/Login/loginSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {  
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isloggedIn.isLoggedIn);

  const login = () => {
    // login logic
    dispatch(loggedIn(true))
  };

  const logout = () => {
    // logout logic
    dispatch(loggedIn(false))
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
