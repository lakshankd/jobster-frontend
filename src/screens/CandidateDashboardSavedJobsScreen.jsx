import React, { useState } from "react";
import Pagination from "../components/common/Pagination";
import { savedJobsData } from "../data/candidateDashboardData";
import SavedJobCard from "../components/candidate-dashboard/saved-jobs/SavedJobCard";

const CandidateDashboardSavedJobsScreen = () => {
  const [savedJobs, setSavedJobs] = useState(savedJobsData);
  return (
    <div className="col-lg-9 mt-4 mt-lg-0">
      <div className="row">
        <div className="col-md-12">
          <div className="user-dashboard-info-box bg-white p-4 shadow-sm mb-0">
            <div className="section-title-02 mb-4">
              <h4>Saved Jobs</h4>
            </div>
            <div className="row">
              {savedJobs?.map((job) => (
                <SavedJobCard key={job.id} {...job} />
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardSavedJobsScreen;
