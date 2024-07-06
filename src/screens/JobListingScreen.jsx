import React from "react";
import JobListingBanner from "../components/job-listing/JobListingBanner";
import JobListingLeftSideBar from "../components/job-listing/JobListingLeftSideBar";
import JobListingFilterHeader from "../components/job-listing/JobListingFilterHeader";
import JobListing from "../components/job-listing/JobListing";
import Pagination from "../components/common/Pagination";

const JobListingScreen = () => {
  return (
    <>
      <JobListingBanner />
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <JobListingLeftSideBar />
            <div className="col-lg-9">
              <JobListingFilterHeader />
              <JobListing />
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListingScreen;
