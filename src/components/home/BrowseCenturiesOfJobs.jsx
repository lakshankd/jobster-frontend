import React from "react";
import MobileAppImg from "../../assets/images/mobile-app.png";

const BrowseCenturiesOfJobs = () => {
  return (
    <section className="bg-light py-4 py-lg-0 my-4">
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center j-mt-sm-n7">
            <img
              className="img-fluid"
              src={MobileAppImg}
              alt="mobile-app-img"
            />
          </div>
          <div className="col-lg-6">
            <div className="section-title">
              <h2 className="title">
                <span>Browse Centuries of Jobs</span>
              </h2>
              <p className="lead">
                We are efficiently delivering tons of jobs straight to your
                pocket.
              </p>
            </div>
            <div className="d-block d-sm-flex mb-0 mb-lg-2">
              <a
                className="btn btn-white btn-xl btn-app me-0 me-sm-4 mb-2 mb-sm-0 py-3"
                href="#"
              >
                <i className="fab fa-apple"></i>
                <div className="btn-text text-start">
                  <small className="fw-normal">Download on the </small>
                  <span className="mb-0 d-block">App Store</span>
                </div>
              </a>
              <a
                className="btn btn-white btn-sm btn-app mb-2 mb-sm-0 py-3"
                href="#"
              >
                <i className="fab fa-google-play"></i>
                <div className="btn-text text-start">
                  <small className="fw-normal">Get it on </small>
                  <span className="mb-0 d-block">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseCenturiesOfJobs;
