import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import SkillsChip from "./SkillsChip";
import JobDetailsModal from "./JobDetailsModal";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "320px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
  justifyContent: "space-between",
}));

function JobCard({ title, description, skills, jobId }) {
  return (
    <StyledCard>
      <Stack>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "800",
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
            fontSize: "12px",
            textAlign: "center",
            margin: "16px 0px",
            px: 1,
            color: (theme) => theme.palette.secondary.contrastText,
          }}
        >
          {description}
        </Typography>
        <JobDetailsModal jobId={jobId}></JobDetailsModal>
      </Stack>
    </StyledCard>
  );
}

export default JobCard;
