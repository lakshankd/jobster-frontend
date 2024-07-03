import React from "react";

const FeatureInfo = () => {
  return (
    <section className="space-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="feature-info-01 p-4 p-md-5 primary-box">
              <div className="feature-info-icon mb-3 text-primary">
                <i className="flaticon-recruitment-1"></i>
              </div>
              <div className="feature-info-content ps-sm-4 ps-0">
                <h4>Looking For Job?</h4>
                <p>
                  Your next role could be with one of these top leading
                  organizations.
                </p>
                <a href="#">Apply now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-info-01 p-4 p-md-5 dark-box">
              <div className="feature-info-icon mb-3 text-dark">
                <i className="flaticon-interview-2"></i>
              </div>
              <div className="feature-info-content ps-sm-4 ps-0">
                <h4>Are You Recruiting?</h4>
                <p>
                  Five million searchable CVs in one place with our linked CV
                  database.
                </p>
                <a className="text-dark" href="#">
                  Post a job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureInfo;
