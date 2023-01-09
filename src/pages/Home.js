import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import JobCard from "../components/JobCard";
import { Container } from "@mui/system";
import { Pagination } from "@mui/material";
import styled from "@emotion/styled";
import findJobsByQuery from "../data/fetchData";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  marginTop: theme.spacing(4),
  ul: {
    justifyContent: "center",
  },

  button: {
    color: theme.palette.primary.contrastText,
  },

  li: {
    color: theme.palette.primary.contrastText,
  },
}));

function Home() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    const fetch = async () => {
      const jobs = await findJobsByQuery(searchQuery, page);
      setJobs(jobs);
    };
    fetch();
  }, []);

  return (
    <Container>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ justifyContent: "center", mt: 4 }}
      >
        {jobs.map((job) => (
          <Grid key={job.id} item>
            <JobCard
              title={job.title}
              description={job.description}
              skills={job.skills}
            ></JobCard>
          </Grid>
        ))}
      </Grid>
      <StyledPagination page={1} count={10}></StyledPagination>
    </Container>
  );
}

export default Home;
