import React from "react";

const CandidateAwardSection = () => {
  return (
    <div id="awards">
      <h5 className="mb-3">Awards</h5>
      <div className="jobster-candidate-timeline">
        <div className="jobster-timeline-icon">
          <i className="fas fa-trophy"></i>
        </div>
        <div className="jobster-timeline-item">
          <div className="jobster-timeline-cricle">
            <i className="far fa-circle"></i>
          </div>
          <div className="jobster-timeline-info">
            <span className="jobster-timeline-time">2008 - 2012</span>
            <h6 className="mb-2">Perfect Attendance Programs</h6>
            <span>- Engineering High School</span>
            <p className="mt-2">
              Having clarity of purpose and a clear picture of what you desire,
              is probably the single most important factor in achievement. Why
              is Clarity so important?
            </p>
          </div>
        </div>
        <div className="jobster-timeline-item mb-0">
          <div className="jobster-timeline-cricle">
            <i className="far fa-circle"></i>
          </div>
          <div className="jobster-timeline-info">
            <span className="jobster-timeline-time">2012 - 2014</span>
            <h6 className="mb-2">Secondary School Certificate</h6>
            <span>- Engineering High School</span>
            <p className="mt-2">
              So, make the decision to move forward. Commit your decision to
              paper, just to bring it into focus. Then, go for it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateAwardSection;
