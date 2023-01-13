import React, { useState, useContext } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import AuthContext from "../../authentication/AuthContext";

function LoginForm({ callback }) {
  const [username, setUserName] = useState("generic_username");
  const [password, setPassword] = useState("generic_password");
  const auth = useContext(AuthContext);

  const handleSubmit = () => {
    auth.signin(username, callback);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <Typography variant="h4" component="div" sx={{ textAlign: "center" }}>
        Login
      </Typography>
      <TextField
        label="Username"
        default="user"
        value={username}
        sx={{ my: 1 }}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Password"
        value={password}
        sx={{ my: 1 }}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ my: 1 }}>
        Submit
      </Button>
    </Box>
  );
}

export default LoginForm;
