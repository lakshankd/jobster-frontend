import React from "react";

const SocialLinksForm = () => {
  return (
    <div className="user-dashboard-info-box bg-white p-4 shadow-sm">
      <div className="section-title-02 mb-3">
        <h4>Social Links</h4>
      </div>
      <form>
        <div className="row g-2">
          <div className="mb-3 col-sm-6">
            <label className="form-label">Facebook</label>
            <input
              type="text"
              className="form-control"
              defaultValue="https://www.facebook.com/"
            />
          </div>
          <div className="mb-3 col-sm-6">
            <label className="form-label">Twitter</label>
            <input
              type="email"
              className="form-control"
              defaultValue="https://www.twitter.com/"
            />
          </div>
          <div className="col-md-12 mt-0">
            <label className="form-label">Linkedin</label>
            <input
              type="text"
              className="form-control"
              defaultValue="https://www.linkedin.com/"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialLinksForm;
