import React, { useRef, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContext from "../../authentication/AuthContext";
import SearchArea from "./SearchArea";
import { SearchIconWrapper } from "./SearchIconWrapper";
import { StyledInputBase } from "./StyledInputBase";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

export default function SearchAppBar() {
  const { control, handleSubmit } = useForm();
  const queryRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const onSubmit = () => {
    setSearchParams({ query: queryRef.current.value });
  };

  const handlClickLogin = (event) => {
    navigate("/login");
  };

  const handlClickLogout = (event) => {
    auth.signout(() => {
      navigate("/");
    });
  };

  return (
    <Box>
      <AppBar
        sx={{
          position: "static",
          backgroundColor: (theme) => theme.palette.primary.dark,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              marginRight: "8px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Job Search
          </Typography>
          <SearchArea>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="searchQuery"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <StyledInputBase
                    onBlur={onBlur}
                    onChange={onChange}
                    checked={value}
                    inputRef={queryRef}
                    placeholder="Search"
                  />
                )}
              ></Controller>
            </form>
          </SearchArea>
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "end" }}>
            {auth?.user ? (
              <>
                <Button
                  onClick={handlClickLogout}
                  variant="contained"
                  startIcon={<LogoutIcon />}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={handlClickLogin}
                variant="contained"
                startIcon={<LoginIcon />}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
