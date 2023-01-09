import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import SkillsChip from "./SkillsChip";

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

function JobCard({ title, description, skills }) {
  return (
    <StyledCard>
      <Stack>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "center",
            margin: "16px 0px",
            p: 0.5,
            color: (theme) => theme.palette.primary.contrastText,
          }}
        >
          {title}
        </Typography>
        <SkillsChip skills={skills}></SkillsChip>
        <Typography
          sx={{
            fontSize: "16px",
            textAlign: "center",
            margin: "16px 0px",
            px: 1,
            color: (theme) => theme.palette.secondary.contrastText,
          }}
        >
          {description}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            margin: "auto",
            color: (theme) => theme.palette.secondary.contrastText,
            backgroundColor: (theme) => theme.palette.secondary.darker,
            width: "130px",
            p: 0,
          }}
        >
          Learn More
        </Button>
      </Stack>
    </StyledCard>
  );
}

export default JobCard;
