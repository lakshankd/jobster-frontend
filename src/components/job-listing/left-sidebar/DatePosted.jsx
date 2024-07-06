import React from "react";

const DatePosted = () => {
  return (
    <div className="widget">
      <div className="widget-title widget-collapse">
        <h6>Date Posted</h6>
        <a
          className="ms-auto"
          data-bs-toggle="collapse"
          href="#dateposted"
          role="button"
          aria-expanded="false"
          aria-controls="dateposted"
        >
          {" "}
          <i className="fas fa-chevron-down"></i>{" "}
        </a>
      </div>
      <div className="collapse show" id="dateposted">
        <div className="widget-content">
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dateposted1"
            />
            <label className="custom-control-label" htmlFor="dateposted1">
              Last hour
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dateposted2"
            />
            <label className="custom-control-label" htmlFor="dateposted2">
              Last 24 hour
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dateposted3"
            />
            <label className="custom-control-label" htmlFor="dateposted3">
              Last 7 days
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dateposted4"
            />
            <label className="custom-control-label" htmlFor="dateposted4">
              Last 14 days
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dateposted5"
            />
            <label className="custom-control-label" htmlFor="dateposted5">
              Last 30 days
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePosted;
