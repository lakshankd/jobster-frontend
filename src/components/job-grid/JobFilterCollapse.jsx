import React from "react";

const JobFilterCollapse = () => {
  return (
    <div className="collapse" id="collapsefilter">
      <div className="row  mb-4">
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
          <h6 className="mb-3">Date Posted</h6>
          <div className="widget-content">
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dateposted1"
              />
              <label className="custom-control-label" htmlFor="dateposted1">
                Last hour
              </label>
            </div>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dateposted2"
              />
              <label className="custom-control-label" htmlFor="dateposted2">
                Last 24 hour
              </label>
            </div>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dateposted3"
              />
              <label className="custom-control-label" htmlFor="dateposted3">
                Last 7 days
              </label>
            </div>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dateposted4"
              />
              <label className="custom-control-label" htmlFor="dateposted4">
                Last 14 days
              </label>
            </div>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dateposted5"
              />
              <label className="custom-control-label" htmlFor="dateposted5">
                Last 30 days
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
          <h6 className="mb-3">Specialism</h6>
          <div className="widget-content">
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="specialism1"
              />
              <label className="custom-control-label" htmlFor="specialism1">
                IT Contractor
              </label>
            </div>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="specialism2"
              />
              <label className="custom-control-label" htmlFor="specialism2">
                Clinical Psychology
              </label>
            </div>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="specialism3"
              />
              <label className="custom-control-label" htmlFor="specialism3">
                Digital & Creative
              </label>
            </div>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="specialism4"
              />
              <label className="custom-control-label" htmlFor="specialism4">
                Estate Agency
              </label>
            </div>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="specialism5"
              />
              <label className="custom-control-label" htmlFor="specialism5">
                Graduate
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4 mb-sm-0">
          <h6 className="mb-3">Job Type</h6>
          <div className="widget">
            <div className="widget-content">
              <div className="custom-control form-check custom-checkbox fulltime-job">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="jobtype1"
                />
                <label className="custom-control-label" htmlFor="jobtype1">
                  Full Time
                </label>
              </div>
              <div className="custom-control form-check custom-checkbox parttime-job">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="jobtype2"
                />
                <label className="custom-control-label" htmlFor="jobtype2">
                  Part-Time
                </label>
              </div>
              <div className="custom-control form-check custom-checkbox freelance-job">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="jobtype3"
                />
                <label className="custom-control-label" htmlFor="jobtype3">
                  Freelance
                </label>
              </div>
              <div className="custom-control form-check custom-checkbox temporary-job">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="jobtype4"
                />
                <label className="custom-control-label" htmlFor="jobtype4">
                  Temporary
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h6 className="mb-3">Experience</h6>
          <div className="collapse show" id="experience">
            <div className="widget-content">
              <div className="custom-control form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience1"
                />
                <label className="custom-control-label" htmlFor="experience1">
                  Fresher
                </label>
              </div>
              <div className="custom-control form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience2"
                />
                <label className="custom-control-label" htmlFor="experience2">
                  Less than 1 year
                </label>
              </div>
              <div className="custom-control form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience3"
                />
                <label className="custom-control-label" htmlFor="experience3">
                  2 Year
                </label>
              </div>
              <div className="custom-control form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience4"
                />
                <label className="custom-control-label" htmlFor="experience4">
                  3 Year
                </label>
              </div>
              <div className="custom-control form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience5"
                />
                <label className="custom-control-label" htmlFor="experience5">
                  4 Year
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilterCollapse;
