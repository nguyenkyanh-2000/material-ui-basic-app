import React, { useState, useContext } from "react";
import AuthContext from "../authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/login/LoginModal";
import Stack from "@mui/material/Stack";

function Login() {
  let navigate = useNavigate();
  let from = navigate.state?.from?.pathname || "/";

  return (
    <Stack sx={{ p: 4, alignItems: "center" }}>
      <LoginModal
        callback={() => {
          navigate(from, { replace: true });
        }}
      />
    </Stack>
  );
}

export default Login;
