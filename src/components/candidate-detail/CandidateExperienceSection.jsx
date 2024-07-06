import React from "react";

const CandidateExperienceSection = () => {
  return (
    <div id="experience">
      <h5 className="mb-3">Work & Experience</h5>
      <div className="jobster-candidate-timeline">
        <div className="jobster-timeline-icon">
          <i className="fas fa-briefcase"></i>
        </div>
        <div className="jobster-timeline-item">
          <div className="jobster-timeline-cricle">
            <i className="far fa-circle"></i>
          </div>
          <div className="jobster-timeline-info">
            <span className="jobster-timeline-time">
              2018-6-01 <b>to</b> 2022-2-01
            </span>
            <h6 className="mb-2">Web Designer</h6>
            <span>- Inwave Studio</span>
            <p className="mt-2">
              One of the main areas that I work on with my clients is shedding
              these non-supportive beliefs and replacing them with beliefs that
              will help them to accomplish their desires.
            </p>
          </div>
        </div>
        <div className="jobster-timeline-item">
          <div className="jobster-timeline-cricle">
            <i className="far fa-circle"></i>
          </div>
          <div className="jobster-timeline-info">
            <span className="jobster-timeline-time">
              2017-6-01 <b>to</b> 2018-6-01
            </span>
            <h6 className="mb-2">Secondary School Certificate</h6>
            <span>- Engineering High School</span>
            <p className="mt-2">
              Figure out what you want, put a plan together to achieve it,
              understand the cost, believe in yourself then go and get it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateExperienceSection;
