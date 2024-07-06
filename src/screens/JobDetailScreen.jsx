import React from "react";
import MainJobDetailCard from "../components/job-detail/MainJobDetailCard";
import OtherJobDetailCard from "../components/job-detail/OtherJobDetailCard";
import JobDescription from "../components/job-detail/JobDescription";
import Qualification from "../components/job-detail/Qualification";
import OtherQualification from "../components/job-detail/OtherQualification";
import ApplyButton from "../components/job-detail/sidebar/ApplyButton";
import CompanyLinks from "../components/job-detail/sidebar/CompanyLinks";
import JobStats from "../components/job-detail/sidebar/JobStats";
import CompanyDetails from "../components/job-detail/sidebar/CompanyDetails";

const JobDetailScreen = () => {
  return (
    <section className="space-pb pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <MainJobDetailCard />
            <OtherJobDetailCard />
            <JobDescription />
            <hr />
            <Qualification />
            <hr />
            <OtherQualification />
          </div>
          <div className="col-lg-4">
            <div className="sidebar mb-0">
              <ApplyButton />
              <CompanyLinks />
              <CompanyDetails />
              <JobStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailScreen;
