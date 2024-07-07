import React from "react";

const EmployerTab = () => {
  return (
    <div className="tab-pane fade" id="employer" role="tabpanel">
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-12">
            <label className="form-label" htmlFor="Email2">
              Username / Email Address
            </label>
            <input type="text" className="form-control" id="Email2" />
          </div>
          <div className="mb-3 col-12">
            <label className="form-label" htmlFor="password2">
              Password *
            </label>
            <input type="password" className="form-control" id="password2" />
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md-6">
            <a className="btn btn-primary d-grid" href="#">
              Sign up
            </a>
          </div>
          <div className="col-md-6">
            <div className="ms-md-3 mt-3 mt-md-0">
              <a href="#">Forgot Password?</a>
              <div className="custom-control form-check mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Remember-02"
                />
                <label
                  className="custom-control-label form-check-label"
                  htmlFor="Remember-02"
                >
                  Remember Password
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployerTab;
