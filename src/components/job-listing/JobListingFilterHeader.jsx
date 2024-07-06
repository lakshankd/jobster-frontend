import React from "react";

const JobListingFilterHeader = () => {
  return (
    <>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="section-title mb-3 mb-lg-4">
            <h6 className="mb-0">
              Showing 1-5 of <span className="text-primary">28 Jobs</span>
            </h6>
          </div>
        </div>
        <div className="col-md-6">
          <div className="job-filter-tag">
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  Freelance <i className="fas fa-times-circle"></i>{" "}
                </a>
              </li>
              <li>
                <a className="filter-clear" href="#">
                  Reset Search <i className="fas fa-redo-alt"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="job-filter mb-4 d-sm-flex align-items-center">
        <div className="job-alert-bt">
          {" "}
          <a className="btn btn-md btn-dark" href="#">
            <i className="fa fa-envelope"></i>Get job alert{" "}
          </a>{" "}
        </div>
        <div className="job-shortby ms-sm-auto d-flex align-items-center">
          <form className="form-inline">
            <div className="mb-0 d-flex align-items-center">
              <label className="justify-content-start me-2">sort by :</label>
              <div className="short-by">
                <select className="form-control basic-select">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobListingFilterHeader;
