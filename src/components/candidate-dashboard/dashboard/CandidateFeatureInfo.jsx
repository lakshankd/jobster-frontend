import React from "react";

const CandidateFeatureInfo = () => {
  return (
    <div className="row mb-3 mb-lg-4 mt-3 mt-lg-0">
      <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
        <div className="candidates-feature-info shadow-sm border-0">
          <div className="candidates-info-icon text-primary">
            <i className="fas fa-globe-asia"></i>
          </div>
          <div className="candidates-info-content">
            <h6 className="candidates-info-title">Total Applications</h6>
          </div>
          <div className="candidates-info-count">
            <h3 className="mb-0">01</h3>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
        <div className="candidates-feature-info shadow-sm border-0">
          <div className="candidates-info-icon text-primary">
            <i className="fas fa-thumbs-up"></i>
          </div>
          <div className="candidates-info-content">
            <h6 className="candidates-info-title">Shortlisted Applications</h6>
          </div>
          <div className="candidates-info-count">
            <h3 className="mb-0">00</h3>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
        <div className="candidates-feature-info shadow-sm border-0">
          <div className="candidates-info-icon text-primary">
            <i className="fas fa-thumbs-down"></i>
          </div>
          <div className="candidates-info-content">
            <h6 className="candidates-info-title">Rejected Applications</h6>
          </div>
          <div className="candidates-info-count">
            <h3 className="mb-0">00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateFeatureInfo;
