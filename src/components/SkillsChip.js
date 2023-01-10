import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const ListItem = styled("li")(({ theme }) => ({
  margin: "1px",
}));

export default function SkillsChip({ skills }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 1,
        boxShadow: "none",
        backgroundColor: (theme) => theme.palette.primary.light,
      }}
      component="ul"
    >
      {skills.slice(0, 4).map((skill) => {
        return (
          <ListItem key={skill}>
            <Chip
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.light,
                fontSize: "8px",
              }}
              label={skill}
              size="small"
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
