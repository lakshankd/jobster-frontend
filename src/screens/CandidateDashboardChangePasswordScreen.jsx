import React from "react";

const CandidateDashboardChangePasswordScreen = () => {
  return (
    <div className="col-lg-9 mt-4 mt-lg-0">
      <div className="user-dashboard-info-box bg-white p-4 shadow-sm mb-0">
        <div className="section-title-02 mb-4">
          <h4>Change Password</h4>
        </div>
        <div className="row">
          <div className="col-12">
            <form className="form-row">
              <div className="mb-3 col-md-12">
                <label className="form-label">Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  defaultValue=""
                />
              </div>
              <div className="mb-3 col-md-12">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  defaultValue=""
                />
              </div>
              <div className="col-md-12 mb-0">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  defaultValue=""
                />
              </div>
            </form>
          </div>
        </div>
        <a className="btn btn-lg btn-primary mt-4" href="#">
          Change Password
        </a>
      </div>
    </div>
  );
};

export default CandidateDashboardChangePasswordScreen;
