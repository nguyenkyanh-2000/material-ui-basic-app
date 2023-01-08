import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import SkillsPaper from "./SkillsPaper";

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "320px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
}));

function JobCard() {
  return (
    <Stack>
      <StyledCard>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "center",
            margin: "8px 0px",
          }}
        >
          Developer (NextJS, NodeJS)
        </Typography>
        <SkillsPaper></SkillsPaper>
        <Typography
          sx={{
            fontSize: "16px",
            textAlign: "center",
            margin: "16px 0px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </StyledCard>
    </Stack>
  );
}

export default JobCard;
