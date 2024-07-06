import React from "react";

const Gender = () => {
  return (
    <div className="widget">
      <div className="widget-title widget-collapse">
        <h6>Gender</h6>
        <a
          className="ms-auto"
          data-bs-toggle="collapse"
          href="#gender"
          role="button"
          aria-expanded="false"
          aria-controls="gender"
        >
          <i className="fas fa-chevron-down"></i>
        </a>{" "}
      </div>
      <div className="collapse show" id="gender">
        <div className="widget-content">
          <div className="custom-control custom-checkbox form-check">
            <input type="checkbox" className="form-check-input" id="gender1" />
            <label className="custom-control-label" htmlFor="gender1">
              Male
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input type="checkbox" className="form-check-input" id="gender2" />
            <label className="custom-control-label" htmlFor="gender2">
              Female
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
