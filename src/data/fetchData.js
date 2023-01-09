import jobs from "./jobs.json";

const findJobsByQuery = async (q = null, page = 0) => {
  try {
    if (q) {
      let filteredJobs = jobs.filter(
        (job) =>
          job.title.includes(q) ||
          job.city.includes(q) ||
          job.description.includes(q) ||
          job.skills.includes(q)
      );

      return filteredJobs.slice(page * 5, page * 5 + 5);
    } else return jobs.slice(0, 5);
  } catch (error) {
    console.log("error");
  }
};

export default findJobsByQuery;
