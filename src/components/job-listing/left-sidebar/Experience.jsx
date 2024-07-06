import React from "react";

const Experience = () => {
  return (
    <div className="widget">
      <div className="widget-title widget-collapse">
        <h6>Experience</h6>
        <a
          className="ms-auto"
          data-bs-toggle="collapse"
          href="#experience"
          role="button"
          aria-expanded="false"
          aria-controls="experience"
        >
          {" "}
          <i className="fas fa-chevron-down"></i>{" "}
        </a>{" "}
      </div>
      <div className="collapse show" id="experience">
        <div className="widget-content">
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="experience1"
            />
            <label className="custom-control-label" htmlFor="experience1">
              Fresher
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="experience2"
            />
            <label className="custom-control-label" htmlFor="experience2">
              Less than 1 year
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="experience3"
            />
            <label className="custom-control-label" htmlFor="experience3">
              2 Year
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="experience4"
            />
            <label className="custom-control-label" htmlFor="experience4">
              3 Year
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="experience5"
            />
            <label className="custom-control-label" htmlFor="experience5">
              4 Year
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
