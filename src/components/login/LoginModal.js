import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: (theme) => theme.palette.primary.light,
  color: (theme) => theme.palette.primary.contrastText,
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  justifyContent: "center",
};

function LoginModal() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Modal open={true} onClose={handleClose}>
      <Box sx={style}>
        <LoginForm callback={() => {}}></LoginForm>
      </Box>
    </Modal>
  );
}

export default LoginModal;
