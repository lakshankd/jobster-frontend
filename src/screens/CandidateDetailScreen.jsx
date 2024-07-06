import React from "react";
import CandidateDetailBanner from "../components/candidate-detail/CandidateDetailBanner";
import SecondaryMenu from "../components/candidate-detail/SecondaryMenu";
import CandidateDetailCard from "../components/candidate-detail/CandidateDetailCard";
import CandidateDescription from "../components/candidate-detail/CandidateDescription";
import CandidateEducationSection from "../components/candidate-detail/CandidateEducationSection";
import CandidateExperienceSection from "../components/candidate-detail/CandidateExperienceSection";
import CandidateSkillSection from "../components/candidate-detail/CandidateSkillSection";
import CandidatePortfolio from "../components/candidate-detail/CandidatePortfolio";
import CandidateAwardSection from "../components/candidate-detail/CandidateAwardSection";
import CandidateResources from "../components/candidate-detail/sidebar/CandidateResources";
import CandidateContactForm from "../components/candidate-detail/sidebar/CandidateContactForm";

const CandidateDetailScreen = () => {
  return (
    <>
      <CandidateDetailBanner />
      <section className="space-pb">
        <div className="container">
          <div className="row">
            <SecondaryMenu />
          </div>
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="jobster-candidate-detail">
                <div id="about">
                  <h5 className="mb-3">About Me</h5>
                  <CandidateDetailCard />
                  <CandidateDescription />
                </div>
                <hr className="my-4 my-md-5" />
                <CandidateEducationSection />
                <hr className="my-4 my-md-5" />
                <CandidateExperienceSection />
                <hr className="my-4 my-md-5" />
                <CandidateSkillSection />
                <hr className="my-4 my-md-5" />
                <CandidatePortfolio />
                <hr className="my-4 my-md-5" />
                <CandidateAwardSection />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar mb-0">
                <CandidateResources />
                <CandidateContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CandidateDetailScreen;
