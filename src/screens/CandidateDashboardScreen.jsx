import React from "react";
import CandidateFeatureInfo from "../components/candidate-dashboard/dashboard/CandidateFeatureInfo";
import CandidateDashboardChart from "../components/candidate-dashboard/dashboard/CandidateDashboardChart";
import CandidateRecentAppliedJobs from "../components/candidate-dashboard/dashboard/CandidateRecentAppliedJobs";

const CandidateDashboardScreen = () => {
  return (
    <div className="col-lg-9 mt-4 mt-lg-0">
      <CandidateFeatureInfo />
      <CandidateDashboardChart />
      <CandidateRecentAppliedJobs />
    </div>
  );
};

export default CandidateDashboardScreen;
