import React from "react";
import BgBannerImg01 from "../../assets/images/bg/banner-01.jpg";

const Banner = () => {
  return (
    <section
      className="banner bg-holder bg-overlay-black-30 text-white"
      style={{ backgroundImage: `url(${BgBannerImg01})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 position-relative">
            <h1 className="text-white mb-3">
              Its time to do the best work of your life
            </h1>
            <p className="lead mb-4 mb-lg-5 fw-normal">
              There is a way to do it better…find it
            </p>
            <div className="nav-tabs-style-01">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="find-job-tab"
                    data-bs-toggle="tab"
                    href="#find-job"
                    role="tab"
                    aria-controls="find-job"
                    aria-selected="true"
                  >
                    Find A job
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="find-candidate-tab"
                    data-bs-toggle="tab"
                    href="#find-candidate"
                    role="tab"
                    aria-controls="find-candidate"
                    aria-selected="false"
                  >
                    Find A Candidate
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent2">
                <div
                  className="tab-pane fade show active"
                  id="find-job"
                  role="tabpanel"
                  aria-labelledby="find-job-tab"
                >
                  <form className="form-inline">
                    <div className="row w-100">
                      <div className="col-lg-3 col-sm-6">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Job name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="input-group">
                          <select className="form-control basic-select">
                            <option>Job Time</option>
                            <option>Part time</option>
                            <option>Full time</option>
                            <option>Freelance</option>
                            <option>Temporary</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Compnay name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 d-grid">
                        <button className="btn btn-primary btn-block">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="find-candidate"
                  role="tabpanel"
                  aria-labelledby="find-candidate-tab"
                >
                  <form className="form-inline">
                    <div className="row w-100">
                      <div className="col-lg-3 col-sm-6">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Job name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="input-group">
                          <select className="form-control basic-select">
                            <option>Job category</option>
                            <option>Accountancy</option>
                            <option>Purchasing</option>
                            <option>Sales & Marketing</option>
                            <option>Health Care</option>
                            <option>IT Contractor</option>
                            <option>Engineering</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Job location"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 d-grid">
                        <button className="btn btn-primary btn-block">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="job-tag mt-4">
              <ul className="justify-content-center">
                <li className="text-primary">Trending Keywords :</li>
                <li>
                  <a href="#">Accounting,</a>
                </li>
                <li>
                  <a href="#">Clinical Psychology,</a>
                </li>
                <li>
                  <a href="#">IT Contractor</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
