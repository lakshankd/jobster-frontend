import React, { useState } from "react";
import Pagination from "../../common/Pagination";
import { recentAppliedJobsData } from "../../../data/candidateDashboardData";
import CandidateDashboardRecentJobCard from "./CandidateDashboardRecentJobCard";

const CandidateRecentAppliedJobs = () => {
  const [recentJobs, setRecentJobs] = useState(recentAppliedJobsData);
  return (
    <div className="user-dashboard-info-box bg-white p-4 shadow-sm mb-0">
      <div className="section-title mb-4">
        <h4>Recent Applied Jobs</h4>
      </div>
      <div className="row">
        {recentAppliedJobsData?.map((job) => (
          <CandidateDashboardRecentJobCard key={job.id} {...job} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CandidateRecentAppliedJobs;
