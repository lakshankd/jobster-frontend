import React from "react";

const Awards = () => {
  return (
    <div className="user-dashboard-info-box bg-white p-4 shadow-sm">
      <div className="dashboard-resume-title d-flex align-items-center">
        <div className="section-title-02 mb-sm-0">
          <h4 className="mb-0">Awards</h4>
        </div>
        <a
          className="btn btn-md ms-sm-auto btn-primary"
          data-bs-toggle="collapse"
          href="#dateposted-15"
          role="button"
          aria-expanded="false"
          aria-controls="dateposted"
        >
          Add Awards
        </a>
      </div>
      <div className="collapse show" id="dateposted-15">
        <div className="bg-light p-3 mt-4">
          <form className="row g-2">
            <div className="mb-3 col-md-12">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" defaultValue="" />
            </div>
            <div className="mb-3 col-md-12 mt-0">
              <label className="form-label">Institute</label>
              <input type="text" className="form-control" defaultValue="" />
            </div>
            <div className="mb-3 col-sm-6 select-border mt-0">
              <label className="form-label">From</label>
              <div
                className="input-group date"
                id="datetimepicker-10"
                data-target-input="nearest"
              >
                <input
                  type="text"
                  className="form-control datetimepicker-input"
                  defaultValue="08/11/2017"
                  data-target="#datetimepicker-10"
                />
                <div
                  className="input-group-append d-flex"
                  data-target="#datetimepicker-10"
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
                id="datetimepicker-11"
                data-target-input="nearest"
              >
                <input
                  type="text"
                  className="form-control datetimepicker-input"
                  defaultValue="08/11/2022"
                  data-target="#datetimepicker-11"
                />
                <div
                  className="input-group-append d-flex"
                  data-target="#datetimepicker-11"
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
        <div className="jobster-candidate-timeline mt-4">
          <div className="jobster-timeline-icon">
            <i className="fas fa-trophy"></i>
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
                        href="#dateposted-16"
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
                <span className="jobster-timeline-time">2008 - 2012</span>
                <h6 className="mb-2">Perfect Attendance Programs</h6>
                <span>- Engineering High School</span>
                <p className="mt-2">
                  Having clarity of purpose and a clear picture of what you
                  desire, is probably the single most important factor in
                  achievement. Why is Clarity so important?
                </p>
              </div>
              <div className="collapse show" id="dateposted-16">
                <div className="bg-light p-3">
                  <form
                    className="row g-2 collapse show"
                    id="dateposted-form-07"
                  >
                    <div className="mb-3 col-md-12">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Perfect Attendance Programs"
                      />
                    </div>
                    <div className="mb-3 col-md-12 mt-0">
                      <label className="form-label">Institute</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Engineering High School"
                      />
                    </div>
                    <div className="mb-3 col-sm-6 select-border mt-0">
                      <label className="form-label">From</label>
                      <div
                        className="input-group date"
                        id="datetimepicker-12"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          defaultValue="08/11/1999"
                          data-target="#datetimepicker-12"
                        />
                        <div
                          className="input-group-append d-flex"
                          data-target="#datetimepicker-12"
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
                        id="datetimepicker-13"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          defaultValue="08/11/1999"
                          data-target="#datetimepicker-13"
                        />
                        <div
                          className="input-group-append d-flex"
                          data-target="#datetimepicker-13"
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
                        placeholder="Having clarity of purpose and a clear picture of what you desire, is probably the single most important factor in achievement. Why is Clarity so important?"
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
                        href="#dateposted-17"
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
                <span className="jobster-timeline-time">2012 - 2014</span>
                <h6 className="mb-2">Secondary School Certificate</h6>
                <span>- Engineering High School</span>
                <p className="mt-2">
                  So, make the decision to move forward. Commit your decision to
                  paper, just to bring it into focus. Then, go for it!
                </p>
              </div>
              <div className="collapse" id="dateposted-17">
                <div className="bg-light p-3">
                  <form
                    className="row g-2 collapse show"
                    id="dateposted-form-08"
                  >
                    <div className="mb-3 col-md-12">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Secondary School Certificate"
                      />
                    </div>
                    <div className="mb-3 col-md-12 mt-0">
                      <label className="form-label">Institute</label>
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
                        id="datetimepicker-14"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          defaultValue="08/11/2017"
                          data-target="#datetimepicker-14"
                        />
                        <div
                          className="input-group-append d-flex"
                          data-target="#datetimepicker-14"
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
                        id="datetimepicker-15"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          defaultValue="08/11/2022"
                          data-target="#datetimepicker-15"
                        />
                        <div
                          className="input-group-append d-flex"
                          data-target="#datetimepicker-15"
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
                        placeholder="So, make the decision to move forward. Commit your decision to paper, just to bring it into focus. Then, go for it!"
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
      <a className="btn btn-md btn-primary mt-4" href="#">
        Save Settings
      </a>
    </div>
  );
};

export default Awards;
