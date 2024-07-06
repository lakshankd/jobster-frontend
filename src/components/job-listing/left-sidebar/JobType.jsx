import React from "react";

const JobType = () => {
  return (
    <div className="widget">
      <div className="widget-title widget-collapse">
        <h6>Job Type</h6>
        <a
          className="ms-auto"
          data-bs-toggle="collapse"
          href="#jobtype"
          role="button"
          aria-expanded="false"
          aria-controls="jobtype"
        >
          {" "}
          <i className="fas fa-chevron-down"></i>{" "}
        </a>{" "}
      </div>
      <div className="collapse show" id="jobtype">
        <div className="widget-content">
          <div className="custom-control custom-checkbox form-check fulltime-job">
            <input type="checkbox" className="form-check-input" id="jobtype1" />
            <label className="custom-control-label" htmlFor="jobtype1">
              Full Time
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check parttime-job">
            <input type="checkbox" className="form-check-input" id="jobtype2" />
            <label className="custom-control-label" htmlFor="jobtype2">
              Part-Time
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check freelance-job">
            <input type="checkbox" className="form-check-input" id="jobtype3" />
            <label className="custom-control-label" htmlFor="jobtype3">
              Freelance
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check temporary-job">
            <input type="checkbox" className="form-check-input" id="jobtype4" />
            <label className="custom-control-label" htmlFor="jobtype4">
              Temporary
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobType;
