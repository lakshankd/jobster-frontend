import React from "react";
import CoverLetter from "../components/candidate-dashboard/my-resume/CoverLetter";
import Education from "../components/candidate-dashboard/my-resume/Education";
import WorkAndExperience from "../components/candidate-dashboard/my-resume/WorkAndExperience";
import ProfessionalSkill from "../components/candidate-dashboard/my-resume/ProfessionalSkill";
import Awards from "../components/candidate-dashboard/my-resume/Awards";

const CandidateDashboardMyResumeScreen = () => {
  return (
    <div className="col-lg-9 mt-4 mt-lg-0">
      <div className="row">
        <div className="col-12">
          <div className="user-dashboard-info-box bg-white p-4 shadow-sm">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title-02 mb-4">
                  <h3>My Resume</h3>
                </div>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a
                  className="btn btn-primary btn-md mb-4"
                  href="my-resume.html"
                >
                  Preview My Resume
                </a>
              </div>
            </div>
            <CoverLetter />
          </div>
          <Education />
          <WorkAndExperience />
          <ProfessionalSkill />
          <Awards />
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardMyResumeScreen;
