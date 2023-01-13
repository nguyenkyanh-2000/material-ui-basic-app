import React, { useState, useEffect, useContext } from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { findJobsById } from "../../data/fetchData";
import SkillsChip from "./SkillsChip";
import { useLocation } from "react-router-dom";
import AuthContext from "../../authentication/AuthContext";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: (theme) => theme.palette.primary.light,
  color: (theme) => theme.palette.primary.contrastText,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function JobDetailsModal({ jobId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (auth.user) setIsOpen(true);
    else navigate("/login");
  };
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const fetch = async () => {
      const job = await findJobsById(jobId);
      setJob(job);
    };
    fetch();
  }, []);

  return (
    <>
      <Button
        variant="contained"
        size="small"
        onClick={handleOpen}
        sx={{
          margin: "auto",
          color: (theme) => theme.palette.secondary.contrastText,
          backgroundColor: (theme) => theme.palette.secondary.darker,
          width: "130px",
        }}
      >
        Learn More
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {job.title}
          </Typography>
          <SkillsChip skills={job.skills}></SkillsChip>
          <Typography sx={{ mt: 2 }}>City: {job.city}</Typography>
          <Typography sx={{ mt: 2 }}>
            Remote Possibility : {job.remote ? "Yes" : "No"}
          </Typography>
          <Typography sx={{ mt: 2 }}>{job.description}</Typography>
        </Box>
      </Modal>
    </>
  );
}

export default JobDetailsModal;
