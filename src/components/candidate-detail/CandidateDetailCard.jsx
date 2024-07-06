import React from "react";

const CandidateDetailCard = () => {
  return (
    <div className="border p-3">
      <div className="row">
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="d-flex">
            <i className="font-xll text-primary align-self-center flaticon-account"></i>
            <div className="feature-info-content ps-3">
              <label className="mb-0">Name:</label>
              <span className="d-block fw-bold text-dark">Nichole Haynes</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="d-flex">
            <i className="font-xll text-primary align-self-center flaticon-curriculum"></i>
            <div className="feature-info-content ps-3">
              <label className="mb-0">Fax:</label>
              <span className="d-block fw-bold text-dark">(456) 478-2589</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="d-flex">
            <i className="font-xll text-primary align-self-center flaticon-contact"></i>
            <div className="feature-info-content ps-3">
              <label className="mb-0">Phone :</label>
              <span className="d-block fw-bold text-dark">(123)-456-7890</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="d-flex">
            <i className="font-xll text-primary align-self-center flaticon-appointment"></i>
            <div className="feature-info-content ps-3">
              <label className="mb-0">Date Of Birth :</label>
              <span className="d-block fw-bold text-dark">22/08/1992</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="d-flex">
            <i className="font-xll text-primary align-self-center flaticon-map"></i>
            <div className="feature-info-content ps-3">
              <label className="mb-0">Address :</label>
              <span className="d-block fw-bold text-dark">
                24 SL Road, London. UK
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="d-flex">
            <i className="font-xll text-primary align-self-center flaticon-man"></i>
            <div className="feature-info-content ps-3">
              <label className="mb-0">Sex :</label>
              <span className="d-block fw-bold text-dark">Female</span>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex">
            <i className="font-xll text-primary align-self-center flaticon-approval"></i>
            <div className="feature-info-content ps-3">
              <label className="mb-0">Email:</label>
              <span className="d-block fw-bold text-dark">
                Melissa@website.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailCard;
