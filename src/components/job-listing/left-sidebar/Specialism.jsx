import React from "react";

const Specialism = () => {
  return (
    <div className="widget">
      <div className="widget-title widget-collapse">
        <h6>Specialism</h6>
        <a
          className="ms-auto"
          data-bs-toggle="collapse"
          href="#specialism"
          role="button"
          aria-expanded="false"
          aria-controls="specialism"
        >
          {" "}
          <i className="fas fa-chevron-down"></i>{" "}
        </a>{" "}
      </div>
      <div className="collapse show" id="specialism">
        <div className="widget-content">
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="specialism1"
            />
            <label className="custom-control-label" htmlFor="specialism1">
              IT Contractor
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="specialism2"
            />
            <label className="custom-control-label" htmlFor="specialism2">
              Clinical Psychology
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="specialism3"
            />
            <label className="custom-control-label" htmlFor="specialism3">
              Digital & Creative
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="specialism4"
            />
            <label className="custom-control-label" htmlFor="specialism4">
              Estate Agency
            </label>
          </div>
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="specialism5"
            />
            <label className="custom-control-label" htmlFor="specialism5">
              Graduate
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialism;
