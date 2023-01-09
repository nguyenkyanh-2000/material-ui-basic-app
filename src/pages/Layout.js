import React from "react";
import { Outlet, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SearchAppBar from "../components/SearchAppBar";

function Layout() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <SearchAppBar></SearchAppBar>
      <Outlet />
    </Stack>
  );
}

export default Layout;
