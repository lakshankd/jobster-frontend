import React from "react";
import JobGridBanner from "../components/job-grid/JobGridBanner";
import Pagination from "../components/common/Pagination";
import JobFilterHeader from "../components/job-grid/JobFilterHeader";
import JobFilterCollapse from "../components/job-grid/JobFilterCollapse";
import JobGrid from "../components/job-grid/JobGrid";

const JobGridScreen = () => {
  return (
    <>
      <JobGridBanner />
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row mb-4">
                <div className="col-12">
                  <h6 className="mb-0">
                    Showing 1-12 of{" "}
                    <span className="text-primary">28 Jobs</span>
                  </h6>
                </div>
              </div>
              <div className="job-filter mb-4 d-sm-flex align-items-center">
                <div className="job-alert-bt">
                  {" "}
                  <a className="btn btn-md btn-dark" href="#">
                    <i className="fa fa-envelope"></i>Get job alert{" "}
                  </a>{" "}
                </div>
                <JobFilterHeader />
              </div>
              <JobFilterCollapse />
              <JobGrid />
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobGridScreen;
