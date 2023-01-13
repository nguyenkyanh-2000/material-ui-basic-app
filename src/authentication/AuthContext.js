import React, { createContext } from "react";

const AuthContextType = {
  user: "",
  signin: null,
  signout: null,
};

const AuthContext = createContext(AuthContextType);

export default AuthContext;
