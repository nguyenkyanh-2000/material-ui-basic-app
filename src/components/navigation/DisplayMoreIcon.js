import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function DisplayMoreIcon() {
  return (
    <MoreVertIcon
      sx={{
        alignSelf: "center",
        display: {
          xs: "block",
          sm: "none",
        },
      }}
    ></MoreVertIcon>
  );
}

export default DisplayMoreIcon;
