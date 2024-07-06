import React from "react";

const CandidateResources = () => {
  return (
    <>
      <div className="widget">
        <a href="#">
          <div className="docs-content">
            <div className="docs-text">
              Cover letter
              <span className="d-block text-danger">PDF</span>
            </div>
            <div className="docs-icon">
              <i className="font-xlll text-danger flaticon-pdf"></i>
            </div>
          </div>
        </a>
      </div>
      <div className="widget">
        <a href="#">
          <div className="docs-content">
            <div className="docs-text">
              Contract
              <span className="d-block text-success">DOCS</span>
            </div>
            <div className="docs-icon">
              <i className="font-xlll text-success flaticon-doc"></i>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default CandidateResources;
