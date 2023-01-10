import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import JobCard from "../components/JobCard";
import { Container } from "@mui/system";
import { Pagination } from "@mui/material";
import styled from "@emotion/styled";
import { findJobsByQuery } from "../data/fetchData";
import { useSearchParams } from "react-router-dom";

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
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetch = async () => {
      const data = await findJobsByQuery(searchParams.get("query"), page);
      console.log(data.jobs);
      setJobs(data.jobs);
      setTotalPages(data.totalPages);
    };
    fetch();
  }, [page, searchParams]);

  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
      {" "}
      {jobs.length > 0 ? (
        <>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 4, sm: 4, md: 4 }}
            sx={{ m: 4 }}
          >
            {jobs.map((job) => (
              <Grid key={job.id} item>
                <JobCard
                  title={job.title}
                  description={job.description}
                  skills={job.skills}
                  jobId={job.id}
                ></JobCard>
              </Grid>
            ))}
          </Grid>
          <StyledPagination
            page={page}
            count={totalPages}
            onChange={(event, value) => setPage(value)}
          ></StyledPagination>
        </>
      ) : (
        <Typography
          variant="h1"
          mt={4}
          sx={{ textAlign: "center", color: "white" }}
        >
          No results
        </Typography>
      )}
    </Container>
  );
}

export default Home;
