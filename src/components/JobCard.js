import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import SkillsPaper from "./SkillsPaper";
import { flexbox } from "@mui/system";

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
    <StyledCard>
      <Stack>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "center",
            margin: "8px 0px",
            p: 0.5,
            color: (theme) => theme.palette.primary.contrastText,
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
            px: 1,
            color: (theme) => theme.palette.secondary.contrastText,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            margin: "auto",
            color: (theme) => theme.palette.secondary.contrastText,
            backgroundColor: (theme) => theme.palette.secondary.darker,
            width: "130px",
          }}
        >
          Learn More
        </Button>
      </Stack>
    </StyledCard>
  );
}

export default JobCard;
