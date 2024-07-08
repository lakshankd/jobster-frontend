import React from "react";

const CandidateDashboardPricingPlanScreen = () => {
  return (
    <div className="col-lg-9 mt-5 mt-lg-0">
      <div className="row">
        <div className="col-md-12">
          <div className="user-dashboard-info-box bg-white p-4 shadow-sm mb-0">
            <div className="section-title-02 mb-4">
              <h4>Pick the plan that's right for you</h4>
            </div>
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="pricing-plan-01">
                  <div className="pricing-price">
                    <i className="flaticon-recruitment fa-5x"></i>
                    <span>
                      <sup>$</sup>
                      <strong>00</strong>/month
                    </span>
                    <h5 className="pricing-title">Free Forever</h5>
                  </div>
                  <ul className="list-unstyled pricing-list">
                    <li>
                      <i className="fas fa-check"></i>Appear in general results
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Accept mobile app
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Manage candidates directly
                      from your account
                    </li>
                  </ul>
                  <a className="btn btn-outline" href="#">
                    Post a Job
                  </a>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="pricing-plan-01 active mb-0">
                  <div className="pricing-price">
                    <i className="flaticon-recruitment fa-5x"></i>
                    <span>
                      <sup>$</sup>
                      <strong>10</strong>/day
                    </span>
                    <h5 className="pricing-title">Sponsor Jobs</h5>
                  </div>
                  <ul className="list-unstyled pricing-list">
                    <li>
                      <i className="fas fa-check"></i>Job ad live for six-weeks
                    </li>
                    <li>
                      <i className="fas fa-times text-danger"></i>50 Feature
                      Jobs
                    </li>
                    <li>
                      <i className="fas fa-times text-danger"></i>Reach more
                      candidates
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Desktop, mobile and Job
                      Alerts
                    </li>
                  </ul>
                  <a className="btn btn-outline" href="#">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="pricing-plan-01 mb-0">
                  <div className="pricing-price">
                    <i className="flaticon-recruitment fa-5x"></i>
                    <span>
                      <sup>$</sup>
                      <strong>115</strong>/month
                    </span>
                    <h5 className="pricing-title">Premium Plan</h5>
                  </div>
                  <ul className="list-unstyled pricing-list">
                    <li>
                      <i className="fas fa-check"></i>Job ad live for six-weeks
                    </li>
                    <li>
                      <i className="fas fa-check"></i>50 Feature Jobs
                    </li>
                    <li>
                      <i className="fas fa-times text-danger"></i>Premium
                      placement
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Desktop, mobile and Job
                      Alerts
                    </li>
                  </ul>
                  <a className="btn btn-outline" href="#">
                    Select Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardPricingPlanScreen;
