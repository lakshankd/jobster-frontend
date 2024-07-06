import React from "react";

const Qualification = () => {
  return (
    <div className="widget">
      <div className="widget-title widget-collapse">
        <h6>Qualification</h6>
        <a
          className="ms-auto"
          data-bs-toggle="collapse"
          href="#qualification"
          role="button"
          aria-expanded="false"
          aria-controls="qualification"
        >
          {" "}
          <i className="fas fa-chevron-down"></i>
        </a>{" "}
      </div>
      <div className="collapse show" id="qualification">
        <div className="widget-content">
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="qualification1"
            />
            <label className="custom-control-label" htmlFor="qualification1">
              Matriculation
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="qualification2"
            />
            <label className="custom-control-label" htmlFor="qualification2">
              Intermediate
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="qualification3"
            />
            <label className="custom-control-label" htmlFor="qualification3">
              Graduate
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
