import React from "react";

const FaqQuestionForm = () => {
  return (
    <div className="widget mb-0">
      <div className="widget-title mb-0">
        <h5 className="mb-0">Submit Your Question</h5>
      </div>
      <div className="company-contact-inner widget-box">
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="" />
          </div>
          <div className="mb-3">
            <label className="form-label">Website</label>
            <input
              type="text"
              className="form-control"
              id="Website"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder=""
            ></textarea>
          </div>
          <div className="d-grid">
            <a className="btn btn-primary btn-outline-primary" href="#">
              Send Email
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FaqQuestionForm;
