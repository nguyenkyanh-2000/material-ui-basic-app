import React from "react";
import { Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";
import SearchAppBar from "../components/navigation/SearchAppBar";

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
