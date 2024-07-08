import React from "react";

const WorkAndExperience = () => {
  return (
    <div className="user-dashboard-info-box bg-white p-4 shadow-sm">
      <div className="dashboard-resume-title d-flex align-items-center">
        <div className="section-title-02 mb-sm-0">
          <h4 className="mb-0">Work & Experience</h4>
        </div>
        <a
          className="btn btn-md ms-sm-auto btn-primary"
          data-bs-toggle="collapse"
          href="#dateposted-05"
          role="button"
          aria-expanded="false"
          aria-controls="dateposted"
        >
          Add Experience
        </a>
      </div>
      <div className="collapse show" id="dateposted-05">
        <div className="bg-light p-3 mt-4">
          <form className="row g-2">
            <div className="mb-3 col-md-12">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" defaultValue="" />
            </div>
            <div className="mb-3 col-md-12 mt-0">
              <label className="form-label">Company name</label>
              <input type="text" className="form-control" defaultValue="" />
            </div>
            <div className="mb-3 col-sm-6 select-border mt-0">
              <label className="form-label">From</label>
              <div
                className="input-group date"
                id="datetimepicker-01"
                data-target-input="nearest"
              >
                <input
                  type="text"
                  className="form-control datetimepicker-input"
                  defaultValue="14/09/2017"
                  data-target="#datetimepicker-01"
                />
                <div
                  className="input-group-append d-flex"
                  data-target="#datetimepicker-01"
                  data-toggle="datetimepicker"
                >
                  <div className="input-group-text">
                    <i className="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 col-sm-6 select-border mt-0">
              <label className="form-label">Two</label>
              <div
                className="input-group date"
                id="datetimepicker-02"
                data-target-input="nearest"
              >
                <input
                  type="text"
                  className="form-control datetimepicker-input"
                  defaultValue="08/11/2021"
                  data-target="#datetimepicker-02"
                />
                <div
                  className="input-group-append d-flex"
                  data-target="#datetimepicker-02"
                  data-toggle="datetimepicker"
                >
                  <div className="input-group-text">
                    <i className="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 col-md-12 mt-0">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>
            <div className="col-md-12 mb-0 mt-0">
              <a className="btn btn-md btn-primary" href="#">
                Add
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="jobster-candidate-timeline mt-4">
        <div className="jobster-timeline-icon">
          <i className="fas fa-briefcase"></i>
        </div>
        <div className="jobster-timeline-item">
          <div className="jobster-timeline-cricle">
            <i className="far fa-circle"></i>
          </div>
          <div className="jobster-timeline-info">
            <div className="dashboard-timeline-info">
              <div className="dashboard-timeline-edit">
                <ul className="list-unstyled d-flex">
                  <li>
                    <a
                      className="text-end"
                      data-bs-toggle="collapse"
                      href="#dateposted-06"
                      role="button"
                      aria-expanded="false"
                      aria-controls="dateposted"
                    >
                      <i className="fas fa-pencil-alt text-info me-2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-trash-alt text-danger"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <span className="jobster-timeline-time">
                2019-6-01 to 2022-6-01
              </span>
              <h6 className="mb-2">Web Designer</h6>
              <span>- Inwave Studio</span>
              <p className="mt-2">
                One of the main areas that I work on with my clients is shedding
                these non-supportive beliefs and replacing them with beliefs
                that will help them to accomplish their desires.
              </p>
            </div>
            <div className="collapse show" id="dateposted-06">
              <div className="bg-light p-3">
                <form className="row g-2 collapse show" id="dateposted-form-01">
                  <div className="mb-3 col-md-12">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Web Designer"
                    />
                  </div>
                  <div className="mb-3 col-md-12 mt-0">
                    <label className="form-label">Company name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Inwave Studio"
                    />
                  </div>
                  <div className="mb-3 col-sm-6 select-border mt-0">
                    <label className="form-label">From</label>
                    <div
                      className="input-group date"
                      id="datetimepicker-03"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        defaultValue="08/11/1999"
                        data-target="#datetimepicker-03"
                      />
                      <div
                        className="input-group-append d-flex"
                        data-target="#datetimepicker-03"
                        data-toggle="datetimepicker"
                      >
                        <div className="input-group-text">
                          <i className="far fa-calendar-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 col-sm-6 select-border mt-0">
                    <label className="form-label">Two</label>
                    <div
                      className="input-group date"
                      id="datetimepicker-04"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        defaultValue="08/11/1999"
                        data-target="#datetimepicker-04"
                      />
                      <div
                        className="input-group-append d-flex"
                        data-target="#datetimepicker-04"
                        data-toggle="datetimepicker"
                      >
                        <div className="input-group-text">
                          <i className="far fa-calendar-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 col-md-12 mt-0">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires."
                    ></textarea>
                  </div>
                  <div className="col-md-12 mb-0 mt-0">
                    <a className="btn btn-md btn-primary" href="#">
                      Update
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="jobster-timeline-item mb-0">
          <div className="jobster-timeline-cricle">
            <i className="far fa-circle"></i>
          </div>
          <div className="jobster-timeline-info">
            <div className="dashboard-timeline-info">
              <div className="dashboard-timeline-edit">
                <ul className="list-unstyled d-flex">
                  <li>
                    <a
                      className="text-end"
                      data-bs-toggle="collapse"
                      href="#dateposted-07"
                      role="button"
                      aria-expanded="false"
                      aria-controls="dateposted"
                    >
                      <i className="fas fa-pencil-alt text-info me-2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-trash-alt text-danger"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <span className="jobster-timeline-time">
                2019-6-01 to 2022-6-01
              </span>
              <h6 className="mb-2">Secondary School Certificate</h6>
              <span>- Engineering High School</span>
              <p className="mt-2">
                Figure out what you want, put a plan together to achieve it,
                understand the cost, believe in yourself then go and get it!
              </p>
            </div>
            <div className="collapse" id="dateposted-07">
              <div className="bg-light p-3">
                <form className="row g-2 collapse show" id="dateposted-form-02">
                  <div className="mb-3 col-md-12">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Secondary School Certificate"
                    />
                  </div>
                  <div className="mb-3 col-md-12 mt-0">
                    <label className="form-label">Company name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Engineering High School"
                    />
                  </div>
                  <div className="mb-3 col-md-6 select-border mt-0">
                    <label className="form-label">From</label>
                    <div
                      className="input-group date"
                      id="datetimepicker-05"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        defaultValue="08/11/1999"
                        data-target="#datetimepicker-05"
                      />
                      <div
                        className="input-group-append d-flex"
                        data-target="#datetimepicker-05"
                        data-toggle="datetimepicker"
                      >
                        <div className="input-group-text">
                          <i className="far fa-calendar-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 col-md-6 select-border mt-0">
                    <label className="form-label">Two</label>
                    <div
                      className="input-group date"
                      id="datetimepicker-06"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        defaultValue="08/11/1999"
                        data-target="#datetimepicker-06"
                      />
                      <div
                        className="input-group-append d-flex"
                        data-target="#datetimepicker-06"
                        data-toggle="datetimepicker"
                      >
                        <div className="input-group-text">
                          <i className="far fa-calendar-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 col-md-12 mt-0">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Figure out what you want, put a plan together to achieve it, understand the cost, believe in yourself then go and get it!"
                    ></textarea>
                  </div>
                  <div className="col-md-12 mb-0 mt-0">
                    <a className="btn btn-md btn-primary" href="#">
                      Update
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkAndExperience;
