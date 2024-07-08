import React from "react";

const ProfessionalSkill = () => {
  return (
    <div className="user-dashboard-info-box bg-white p-4 shadow-sm">
      <div className="dashboard-resume-title d-flex align-items-center">
        <div className="section-title-02 mb-sm-0">
          <h4 className="mb-0">Professional Skill</h4>
        </div>
        <a className="btn btn-md ms-sm-auto btn-primary" href="#">
          Add Skill
        </a>
      </div>
      <div className="collapse show" id="dateposted-11">
        <div className="bg-light p-3 mt-4">
          <form className="row g-2 align-items-center">
            <div className="mb-3 col-sm-6">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Photoshop"
              />
            </div>
            <div className="mb-3 col-sm-5">
              <label className="form-label">Percentage</label>
              <input type="text" className="form-control" defaultValue="70%" />
            </div>
            <div className="mb-3 col-sm-1 text-sm-center">
              <a className="mt-3 d-block" href="#">
                <i className="far fa-trash-alt text-danger"></i>
              </a>
            </div>
          </form>
          <form className="row g-2 align-items-center">
            <div className="mb-3 col-sm-6">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                defaultValue="HTML/CSS"
              />
            </div>
            <div className="mb-3 col-sm-5">
              <label className="form-label">Percentage</label>
              <input type="text" className="form-control" defaultValue="55%" />
            </div>
            <div className="mb-3 col-sm-1 text-sm-center">
              <a className="mt-3 d-block" href="#">
                <i className="far fa-trash-alt text-danger"></i>
              </a>
            </div>
          </form>
          <form className="row g-2 align-items-center">
            <div className="mb-3 col-sm-6">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                defaultValue="JavaScript80"
              />
            </div>
            <div className="mb-3 col-sm-5">
              <label className="form-label">Percentage</label>
              <input type="text" className="form-control" defaultValue="80%" />
            </div>
            <div className="mb-3 col-sm-1 text-sm-center">
              <a className="mt-3 d-block" href="#">
                <i className="far fa-trash-alt text-danger"></i>
              </a>
            </div>
          </form>
          <form className="row g-2 align-items-center">
            <div className="mb-3 col-sm-6">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" defaultValue="PHP" />
            </div>
            <div className="mb-3 col-sm-5">
              <label className="form-label">Percentage</label>
              <input type="text" className="form-control" defaultValue="60%" />
            </div>
            <div className="mb-3 col-sm-1 text-sm-center">
              <a className="mt-3 d-block" href="#">
                <i className="far fa-trash-alt text-danger"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkill;
