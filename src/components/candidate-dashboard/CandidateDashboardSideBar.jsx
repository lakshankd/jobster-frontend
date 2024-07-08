import React from "react";
import Avatar04 from "../../assets/images/avatar/04.jpg";
import { useLocation } from "react-router-dom";

const CandidateDashboardSideBar = () => {
  const location = useLocation();

  return (
    <div className="col-lg-3">
      <div className="bg-white p-4 shadow-sm">
        <div className="candidates-user-info">
          <div className="jobster-user-info">
            <div className="profile-avatar">
              <img className="img-fluid " src={Avatar04} alt="" />
              <i className="fas fa-pencil-alt"></i>
            </div>
            <div className="profile-avatar-info">
              <h3>Brooke Kelly</h3>
            </div>
          </div>
        </div>
        <div className="progress mt-2">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "85%" }}
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="candidates-skills">
          <div className="candidates-skills-info mb-4">
            <h3 className="text-primary">85%</h3>
            <span className="d-block">Skills increased by job Title.</span>
          </div>
        </div>
        <div className="secondary-menu">
          <ul className="list-unstyled mb-0">
            <li>
              <a
                className={
                  location.pathname === "/dashboard-candidates" ? "active" : ""
                }
                href="/dashboard-candidates"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/dashboard-candidates/my-profile"
                    ? "active"
                    : ""
                }
                href="/dashboard-candidates/my-profile"
              >
                My Profile
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/dashboard-candidates/change-password"
                    ? "active"
                    : ""
                }
                href="/dashboard-candidates/change-password"
              >
                Change Password
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/dashboard-candidates/my-resume"
                    ? "active"
                    : ""
                }
                href="/dashboard-candidates/my-resume"
              >
                My Resume
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/dashboard-candidates/manage-jobs"
                    ? "active"
                    : ""
                }
                href="/dashboard-candidates/manage-jobs"
              >
                Manage Jobs
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/dashboard-candidates/saved-jobs"
                    ? "active"
                    : ""
                }
                href="/dashboard-candidates/saved-jobs"
              >
                Saved Jobs
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/dashboard-candidates/pricing"
                    ? "active"
                    : ""
                }
                href="/dashboard-candidates/pricing"
              >
                Pricing Plan
              </a>
            </li>
            <li>
              <a href="/login">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardSideBar;
