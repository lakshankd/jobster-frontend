import React from "react";

const Education = () => {
  return (
    <div className="user-dashboard-info-box bg-white p-4 shadow-sm">
      <div className="dashboard-resume-title d-flex align-items-center">
        <div className="section-title-02 mb-sm-0">
          <h4 className="mb-0">Education</h4>
        </div>
        <a
          className="btn btn-md ms-sm-auto btn-primary"
          data-bs-toggle="collapse"
          href="#dateposted"
          role="button"
          aria-expanded="false"
          aria-controls="dateposted"
        >
          Add Education
        </a>
      </div>
      <div className="collapse show" id="dateposted">
        <div className="bg-light p-3 mt-4">
          <form className="row g-2">
            <div className="mb-3 col-md-12">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" defaultValue="" />
            </div>
            <div className="mb-3 col-sm-6 select-border mt-0">
              <label className="form-label">Year</label>
              <select
                className="form-control basic-select"
                defaultValue="value 01"
              >
                <option value="value 01">2022</option>
                <option value="value 02">2008</option>
                <option value="value 03">2009</option>
                <option value="value 04">2010</option>
                <option value="value 05">2011</option>
                <option value="value 06">2012</option>
                <option value="value 07">2013</option>
                <option value="value 08">2014</option>
                <option value="value 09">2015</option>
                <option value="value 10">2016</option>
                <option value="value 11">2017</option>
                <option value="value 12">2018</option>
                <option value="value 13">2019</option>
                <option value="value 14">2022</option>
                <option value="value 15">2021</option>
                <option value="value 16">2022</option>
                <option value="value 17">2023</option>
                <option value="value 18">2024</option>
                <option value="value 19">2025</option>
                <option value="value 20">2026</option>
                <option value="value 21">2027</option>
                <option value="value 22">2028</option>
                <option value="value 23">2029</option>
                <option value="value 14">2030</option>
              </select>
            </div>
            <div className="mb-3 col-sm-6 mt-0">
              <label className="form-label">Institute</label>
              <input type="text" className="form-control" defaultValue="" />
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
          <i className="fas fa-graduation-cap"></i>
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
                      href="#dateposted-02"
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
              <span className="jobster-timeline-time">2018 - Pres</span>
              <h6 className="mb-2">Masters in Software Engineering</h6>
              <span>- Engineering University</span>
              <p className="mt-2">
                This is the beginning of creating the life that you want to
                live. Know what the future holds for you as a result of the
                choice you can make today.
              </p>
            </div>
            <div className="collapse show" id="dateposted-02">
              <div className="bg-light p-3">
                <form className="row g-2 collapse show" id="dateposted-01">
                  <div className="mb-3 col-md-12">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Masters in Software Engineering"
                    />
                  </div>
                  <div className="mb-3 col-sm-6 select-border mt-0">
                    <label className="form-label">Year</label>
                    <select
                      className="form-control basic-select"
                      defaultValue="value 01"
                    >
                      <option value="value 01">2022</option>
                      <option value="value 02">2008</option>
                      <option value="value 03">2009</option>
                      <option value="value 04">2010</option>
                      <option value="value 05">2011</option>
                      <option value="value 06">2012</option>
                      <option value="value 07">2013</option>
                      <option value="value 08">2014</option>
                      <option value="value 09">2015</option>
                      <option value="value 10">2016</option>
                      <option value="value 11">2017</option>
                      <option value="value 12">2018</option>
                      <option value="value 13">2019</option>
                      <option value="value 14">2022</option>
                      <option value="value 15">2021</option>
                      <option value="value 16">2022</option>
                      <option value="value 17">2023</option>
                      <option value="value 18">2024</option>
                      <option value="value 19">2025</option>
                      <option value="value 20">2026</option>
                      <option value="value 21">2027</option>
                      <option value="value 22">2028</option>
                      <option value="value 23">2029</option>
                      <option value="value 14">2030</option>
                    </select>
                  </div>
                  <div className="mb-3 col-sm-6 mt-0">
                    <label className="form-label">Institute</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Engineering University"
                    />
                  </div>
                  <div className="mb-3 col-md-12 mt-0">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="This is the beginning of creating the life that you want to live. Know what the future holds for you as a result of the choice you can make today."
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
                      href="#dateposted-03"
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
              <span className="jobster-timeline-time">2014 - 2018</span>
              <h6 className="mb-2">Diploma in Graphics Design</h6>
              <span>- Graphic Arts Institute</span>
              <p className="mt-2">
                Have some fun and hypnotize yourself to be your very own “Ghost
                of Christmas future” and see what the future holds for you.
              </p>
            </div>
            <div className="collapse" id="dateposted-03">
              <div className="bg-light p-3">
                <form className="row g-2 collapse show" id="dateposted-04">
                  <div className="mb-3 col-md-12">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Diploma in Graphics Design"
                    />
                  </div>
                  <div className="mb-3 col-md-6 select-border mt-0">
                    <label className="form-label">Year</label>
                    <select
                      className="form-control basic-select"
                      defaultValue="value 01"
                    >
                      <option value="value 01">2022</option>
                      <option value="value 02">2008</option>
                      <option value="value 03">2009</option>
                      <option value="value 04">2010</option>
                      <option value="value 05">2011</option>
                      <option value="value 06">2012</option>
                      <option value="value 07">2013</option>
                      <option value="value 08">2014</option>
                      <option value="value 09">2015</option>
                      <option value="value 10">2016</option>
                      <option value="value 11">2017</option>
                      <option value="value 12">2018</option>
                      <option value="value 13">2019</option>
                      <option value="value 14">2022</option>
                      <option value="value 15">2021</option>
                      <option value="value 16">2022</option>
                      <option value="value 17">2023</option>
                      <option value="value 18">2024</option>
                      <option value="value 19">2025</option>
                      <option value="value 20">2026</option>
                      <option value="value 21">2027</option>
                      <option value="value 22">2028</option>
                      <option value="value 23">2029</option>
                      <option value="value 14">2030</option>
                    </select>
                  </div>
                  <div className="mb-3 col-md-6 mt-0">
                    <label className="form-label">Institute</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Graphic Arts Institute"
                    />
                  </div>
                  <div className="mb-3 col-md-12 mt-0">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Have some fun and hypnotize yourself to be your very own “Ghost of Christmas future” and see what the future holds for you."
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

export default Education;
