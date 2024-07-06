import React, { useState } from "react";
import { jobGridData } from "../../data/jobGridData";
import JobGridCard from "./JobGridCard";

const JobGrid = () => {
  const [jobs, setJobs] = useState(jobGridData);
  return (
    <div className="row">
      {jobs?.map((job) => (
        <JobGridCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobGrid;
