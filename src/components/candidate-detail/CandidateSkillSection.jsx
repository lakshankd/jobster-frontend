import React from "react";

const CandidateSkillSection = () => {
  return (
    <div id="skill">
      <h5 className="mb-3">Professional Skill</h5>
      <div className="">
        <blockquote className="blockquote">
          So how do we get clarity? Simply by asking ourselves lots of
          questions: What do I really want? What does success look like to me?
          How will this achievement change my life? How can I use this success
          to make a difference for others?
        </blockquote>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "55%" }}
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar-title">Photoshop</div>
              <span className="progress-bar-number">70%</span>
            </div>
          </div>
          <div className="progress mb-md-0">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar-title">JavaScript</div>
              <span className="progress-bar-number">80%</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "55%" }}
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar-title">HTML/CSS</div>
              <span className="progress-bar-number">55%</span>
            </div>
          </div>
          <div className="progress mb-md-0">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar-title">PHP</div>
              <span className="progress-bar-number">60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSkillSection;
