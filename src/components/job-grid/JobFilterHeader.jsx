import React from "react";

const JobFilterHeader = () => {
  return (
    <div className="job-shortby ms-sm-auto d-sm-flex align-items-center">
      <form className="form-inline">
        <div className="form-group mb-0 d-sm-flex align-items-center">
          <label className="justify-content-start me-2 mb-2 mb-sm-0">
            sort by :
          </label>
          <div className="short-by">
            <select className="form-control basic-select">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
      </form>
      <div className="filter-btn ms-sm-3 ms-auto mt-2 mt-sm-0">
        {" "}
        <a
          className="btn btn-outline-primary"
          data-bs-toggle="collapse"
          href="#collapsefilter"
          role="button"
          aria-expanded="false"
          aria-controls="collapsefilter"
        >
          <i className="fa fa-filter"></i>Show Filter{" "}
        </a>
      </div>
    </div>
  );
};

export default JobFilterHeader;
