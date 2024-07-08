import React from "react";

const PlansAndPackages = () => {
  return (
    <section className="space-ptb bg-light">
      <div className="container">
        <div className="row align-items-center mb-4 mb-md-0">
          <div className="col-md-7">
            <div className="section-title">
              <h2 className="title">
                <span>Pick the plan that's right for you</span>
              </h2>
              <p>
                So, make the decision to move forward. Commit your decision to
                paper, just to bring it into focus. Then, go for it!
              </p>
            </div>
          </div>
          <div className="col-md-5 text-md-end">
            <a className="btn btn-outline-primary" href="#">
              Try 1 month free
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="pricing-plan-02">
              <div className="pricing-price">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-md-3">
                    <h5 className="pricing-title">Free Forever</h5>
                    <div className="price-month">
                      <span className="price">$0</span>
                      <span className="month">Month</span>
                    </div>
                  </div>
                  <div className="col-xl-7 col-md-6 py-4 py-md-0">
                    <ul className="list-unstyled pricing-list list-style-01">
                      <li>Appear in general results</li>
                      <li>Accept mobile app </li>
                      <li>Manage candidates directly from your account</li>
                    </ul>
                  </div>
                  <div className="col-xl-2 col-md-3 text-start text-md-end">
                    <a className="btn btn-white" href="#">
                      Post a Job
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="pricing-plan-02 active">
              <div className="pricing-price">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-md-3">
                    <h5 className="pricing-title">Sponsor Jobs</h5>
                    <div className="price-month">
                      <span className="price">$10</span>
                      <span className="month">Day</span>
                    </div>
                  </div>
                  <div className="col-xl-7 col-md-6 py-4 py-md-0">
                    <ul className="list-unstyled pricing-list list-style-01">
                      <li>Job ad live for six-weeks</li>
                      <li>
                        <del>50 Feature Jobs</del>
                      </li>
                      <li>
                        <del>Premium placement</del>
                      </li>
                      <li>Desktop, mobile and Job Alerts</li>
                    </ul>
                  </div>
                  <div className="col-xl-2 col-md-3 text-start text-md-end">
                    <a className="btn btn-outline" href="#">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="pricing-plan-02 mb-0">
              <div className="pricing-price">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-md-3">
                    <h5 className="pricing-title">Premium Plan</h5>
                    <div className="price-month">
                      <span className="price">$299</span>
                      <span className="month">Year</span>
                    </div>
                  </div>
                  <div className="col-xl-7 col-md-6 py-4 py-md-0">
                    <ul className="list-unstyled pricing-list list-style-01">
                      <li>Job ad live for six-weeks</li>
                      <li>50 Feature Jobs </li>
                      <li>Premium placement </li>
                      <li>Desktop, mobile and Job Alerts</li>
                    </ul>
                  </div>
                  <div className="col-xl-2 col-md-3 text-start text-md-end">
                    <a className="btn btn-white" href="#">
                      Select Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansAndPackages;
