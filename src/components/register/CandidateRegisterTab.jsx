import React from "react";

const CandidateRegisterTab = () => {
  return (
    <div className="tab-pane active" id="candidate" role="tabpanel">
      <form className="mt-4">
        <div className="row g-2">
          <div className="mb-2 col-sm-6">
            <label className="form-label" htmlFor="Username">
              Username *
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-2 col-sm-6">
            <label className="form-label">Email Address *</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-2 col-sm-6">
            <label className="form-label">Password *</label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-2 col-sm-6">
            <label className="form-label" htmlFor="password2">
              Confirm Password *
            </label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-2 col-12">
            <label className="form-label" htmlFor="phone">
              Phone:
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-2 col-md-12 select-border">
            <label className="form-label" htmlFor="sector">
              Select Sector:
            </label>
            <select
              className="form-control basic-select"
              defaultValue="value 01"
            >
              <option value="value 01">Accountancy</option>
              <option value="value 02">Architecture</option>
              <option value="value 03">Finance</option>
              <option value="value 04">Education</option>
              <option value="value 05">Engineering</option>
              <option value="value 06">Estate Agency</option>
              <option value="value 07">IT Contractor</option>
              <option value="value 08">Law</option>
            </select>
          </div>
          <div className="mb-3 col-12">
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="accepts-01"
              />
              <label
                className="custom-control-label form-check-label"
                htmlFor="accepts-01"
              >
                you accept our Terms and Conditions and Privacy Policy
              </label>
            </div>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md-6">
            <a className="btn btn-primary d-block" href="#">
              Sign up
            </a>
          </div>
          <div className="col-md-6 text-md-end mt-2 text-center">
            <p>
              Already registered? <a href="#"> Sign in here</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CandidateRegisterTab;
