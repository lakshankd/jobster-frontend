import React, { useState } from "react";
import { jobListingData } from "../../data/jobListingData";
import JobListingCard from "./JobListingCard";

const JobListing = () => {
  const [jobs, setJobs] = useState(jobListingData);
  return (
    <div className="row">
      {jobs.map((job) => (
        <JobListingCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobListing;
