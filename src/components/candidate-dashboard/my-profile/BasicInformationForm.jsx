import React from "react";

const BasicInformationForm = () => {
  return (
    <div className="user-dashboard-info-box bg-white p-4 shadow-sm">
      <div className="section-title-02 mb-2">
        <h4>Basic Information</h4>
      </div>
      <div className="cover-photo-contact">
        <div className="upload-file">
          <div className="custom-file">
            <input type="file" className="custom-file-input" />
            <label className="custom-file-label form-label">
              Upload Cover Photo
            </label>
          </div>
        </div>
      </div>
      <form>
        <div className="row g-2">
          <div className="mb-3 col-sm-6">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue="Brooke Kelly"
            />
          </div>
          <div className="mb-3 col-sm-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              defaultValue="saralisbon@gmail.com"
            />
          </div>
          <div className="mb-3 col-sm-6 datetimepickers mt-0">
            <label className="form-label">Date of birth</label>
            <div
              className="input-group date"
              id="datetimepicker-01"
              data-target-input="nearest"
            >
              <input
                type="text"
                className="form-control datetimepicker-input"
                defaultValue="08/11/2022"
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
          <div className="mb-3 col-sm-6  mt-0">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              defaultValue="+(123) 345-6789"
            />
          </div>
          <div className="mb-3 col-sm-6 mt-0">
            <label className="d-block mb-3 form-label d-flex">Gender</label>
            <div className="form-check custom-control custom-radio d-inline-flex">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check  custom-control custom-radio ms-3 d-inline-flex">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
          <div className="mb-3 col-sm-6 mt-0">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              className="form-control"
              defaultValue="General Insurance"
            />
          </div>
          <div className="mb-3 col-sm-6 select-border mt-0">
            <label className="form-label">Job Title</label>
            <select
              className="form-control basic-select"
              defaultValue="value 01"
            >
              <option value="value 01">Test Selector</option>
              <option value="value 02">Glen Cove, NY 11542</option>
              <option value="value 03">Minneapolis, MN 55406</option>
            </select>
          </div>

          <div className="mb-3 col-sm-6 mt-0">
            <label className="form-label">Salary</label>
            <input
              type="text"
              className="form-control"
              defaultValue="$33,000"
            />
          </div>
          <div className="col-md-12 mt-0">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself."
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInformationForm;
