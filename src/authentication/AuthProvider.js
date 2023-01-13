import React, { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  let [user, setUser] = useState("");
  let signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };
  let signout = (callback) => {
    setUser(null);
    callback();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
