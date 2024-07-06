import React from "react";

const CandidateEducationSection = () => {
  return (
    <div id="education">
      <h5 className="mb-3">Education</h5>
      <div className="jobster-candidate-timeline">
        <div className="jobster-timeline-icon">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="jobster-timeline-item">
          <div className="jobster-timeline-cricle">
            <i className="far fa-circle"></i>
          </div>
          <div className="jobster-timeline-info">
            <span className="jobster-timeline-time">2018 - Pres</span>
            <h6 className="mb-2">Masters in Software Engineering</h6>
            <span>- Engineering University</span>
            <p className="mt-2">
              This is the beginning of creating the life that you want to live.
              Know what the future holds for you as a result of the choice you
              can make today.
            </p>
          </div>
        </div>
        <div className="jobster-timeline-item">
          <div className="jobster-timeline-cricle">
            <i className="far fa-circle"></i>
          </div>
          <div className="jobster-timeline-info">
            <span className="jobster-timeline-time">2014 - 2018</span>
            <h6 className="mb-2">Diploma in Graphics Design</h6>
            <span>- Graphic Arts Institute</span>
            <p className="mt-2">
              Have some fun and hypnotize yourself to be your very own “Ghost of
              Christmas future” and see what the future holds for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateEducationSection;
