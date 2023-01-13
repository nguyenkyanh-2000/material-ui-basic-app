import styled from "@emotion/styled";
import { alpha } from "@mui/material";

const SearchArea = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(0),
  marginRight: theme.spacing(2),
  flexGrow: 1,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
  width: "100%",
  maxWidth: "400px",
}));

export default SearchArea;
