import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const ListItem = styled("li")(({ theme }) => ({
  margin: "1px",
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
  ]);

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        my: 0.5,
        p: 0.5,
        boxShadow: "none",
        backgroundColor: (theme) => theme.palette.primary.light,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.light,
              }}
              label={data.label}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
