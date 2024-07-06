import React from "react";

const CandidateContactForm = () => {
  return (
    <div className="widget">
      <div className="widget-title mb-0">
        <h5 className="mb-0">Contact Nichole Haynes</h5>
      </div>
      <div className="widget-content mt-0">
        <div className="company-contact-inner">
          <form>
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="" />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder=""
              ></textarea>
            </div>
            <a className="btn btn-primary btn-outline-primary d-grid" href="#">
              Send Email
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateContactForm;
