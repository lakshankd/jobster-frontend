import React from "react";
import Bannerimg01 from "../../assets/images/bg/banner-01.jpg";

const JobGridBanner = () => {
  return (
    <section
      className="header-inner header-inner-big bg-holder text-white"
      style={{ backgroundImage: `url(${Bannerimg01})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="job-search-field">
              <div className="job-search-item">
                <form className="form row">
                  <div className="col-lg-5 col-sm-6">
                    <div className="mb-3 left-icon">
                      <input
                        type="text"
                        className="form-control"
                        name="job_title"
                        placeholder="What?"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="mb-3 left-icon">
                      <input
                        type="text"
                        className="form-control"
                        name="job_title"
                        placeholder="Where?"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-12">
                    <div className="mb-3 form-action">
                      <button type="submit" className="btn btn-primary mt-0">
                        Find Job
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobGridBanner;
