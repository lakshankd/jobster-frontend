import React from "react";

const CandidateSignInForm = () => {
  return (
    <form className="mt-4">
      <div className="row">
        <div className="mb-3 col-12">
          <label className="form-label" htmlFor="Email2">
            Username / Email Address:
          </label>
          <input type="text" className="form-control" id="Email22" />
        </div>
        <div className="mb-3 col-12">
          <label className="form-label" htmlFor="password2">
            Password*
          </label>
          <input type="password" className="form-control" id="password32" />
        </div>
      </div>
      <div className="row g-2">
        <div className="col-md-6">
          <a className="btn btn-primary d-grid" href="#">
            Sign In
          </a>
        </div>
        <div className="col-md-6">
          <div className="ms-md-3 mt-3 mt-md-0 forgot-pass">
            <a href="#">Forgot Password?</a>
            <p className="mt-1">
              Don't have account? <a href="/register">Sign Up here</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CandidateSignInForm;
