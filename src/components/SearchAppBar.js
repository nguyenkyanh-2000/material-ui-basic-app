import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const SearchArea = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(0),
  flexGrow: 1,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (searchQuery) => {
    console.log(searchQuery);
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
            }}
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
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    checked={value}
                    inputRef={ref}
                  />
                )}
              ></Controller>
            </form>
          </SearchArea>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          />
          <MoreIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
