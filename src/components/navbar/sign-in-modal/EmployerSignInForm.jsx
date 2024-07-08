import React from "react";

const EmployerSignInForm = () => {
  return (
    <form className="mt-4">
      <div className="row">
        <div className="mb-3 col-12">
          <label className="form-label" htmlFor="Email2">
            Username / Email Address:
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
            Sign Up
          </a>
        </div>
        <div className="col-md-6">
          <div className="ms-md-3 mt-3 mt-md-0">
            <a href="#">Forgot Password?</a>
            <div className="form-check custom-control custom-checkbox mt-2 mb-0">
              <input
                type="checkbox"
                className="custom-control-input form-check-input"
                id="Remember-02"
              />
              <label className="form-label mb-0 " htmlFor="Remember-02">
                Remember Password
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmployerSignInForm;
