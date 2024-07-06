import React from "react";

const OfferedSalary = () => {
  return (
    <div className="widget">
      <div className="widget-title widget-collapse">
        <h6>Offered Salary</h6>
        <a
          className="ms-auto"
          data-bs-toggle="collapse"
          href="#Offeredsalary"
          role="button"
          aria-expanded="false"
          aria-controls="Offeredsalary"
        >
          {" "}
          <i className="fas fa-chevron-down"></i>{" "}
        </a>{" "}
      </div>
      <div className="collapse show" id="Offeredsalary">
        <div className="widget-content">
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="Offeredsalary1"
            />
            <label className="custom-control-label" htmlFor="Offeredsalary1">
              10k - 20k
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="Offeredsalary2"
            />
            <label className="custom-control-label" htmlFor="Offeredsalary2">
              20k - 30k
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="Offeredsalary3"
            />
            <label className="custom-control-label" htmlFor="Offeredsalary3">
              30k - 40k
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="Offeredsalary4"
            />
            <label className="custom-control-label" htmlFor="Offeredsalary4">
              40k - 50k
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="Offeredsalary5"
            />
            <label className="custom-control-label" htmlFor="Offeredsalary5">
              50k - 60k
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferedSalary;
