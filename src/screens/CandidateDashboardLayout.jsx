import React from "react";
import { Outlet } from "react-router-dom";
import CandidateDashboardSideBar from "../components/candidate-dashboard/CandidateDashboardSideBar";

const CandidateDashboardLayout = () => {
  return (
    <section className="space-ptb bg-light">
      <div className="container">
        <div className="row">
          <CandidateDashboardSideBar />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default CandidateDashboardLayout;
