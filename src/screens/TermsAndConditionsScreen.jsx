import React from "react";
import InnerBanner from "../components/common/InnerBanner";

const TermsAndConditionsScreen = () => {
  return (
    <>
      <InnerBanner
        primaryPageName={"Terms and conditions"}
        secondaryPageName={"Home"}
        secondaryPageUrl={"/"}
      />
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Terms and conditions</h2>
              </div>
              <h6 className="text-primary">1. Description of Service</h6>
              <p className="mb-20">
                Making a decision to do something – this is the first step. We
                all know that nothing moves until someone makes a decision. The
                first action is always in making the decision to proceed.
              </p>
              <h6 className="text-primary mt-4">
                2. Your Registration Obligations
              </h6>
              <p className="mb-20">
                Focus is having the unwavering attention to complete what you
                set out to do. There are a million distractions in every facet
                of our lives. Telephones and e-mail, clients and managers,
                spouses and kids, TV, newspapers and radio – the distractions
                are everywhere and endless. Everyone wants a piece of us and the
                result can be totally overwhelming.
              </p>
              <h6 className="text-primary mt-4">
                3. User Account, Password, and Security
              </h6>
              <p className="mb-20">
                So, how can we stay on course with all the distractions in our
                lives? Willpower is a good start, but it’s very difficult to
                stay on track simply through willpower.
              </p>
              <h6 className="text-primary mt-4">4. User Conduct</h6>
              <p className="mb-20">
                We also know those epic stories, those modern-day legends
                surrounding the early failures of such supremely successful
                folks as Michael Jordan and Bill Gates. We can look a bit
                further back in time to Albert Einstein or even further back to
                Abraham Lincoln. What made each of these people so successful?
                Motivation.
              </p>
              <ul className="mb-20 list-style p-0">
                <li>
                  <i className="fas fa-angle-right me-3 text-primary"></i>If
                  success is a process with a number of defined steps,
                </li>
                <li>
                  <i className="fas fa-angle-right me-3 text-primary"></i>Commit
                  your decision to paper, just to bring it into focus.
                </li>
                <li>
                  <i className="fas fa-angle-right me-3 text-primary"></i>
                  Without clarity, you send a very garbled message out to the
                  Universe.
                </li>
                <li>
                  <i className="fas fa-angle-right me-3 text-primary"></i>You
                  will run aground and become hopelessly stuck in the mud
                </li>
                <li>
                  <i className="fas fa-angle-right me-3 text-primary"></i>Simply
                  by asking ourselves lots of questions
                </li>
              </ul>
              <h6 className="text-primary mt-4">5. International Use</h6>
              <p className="mb-4 mb-md-5">
                We also know those epic stories, those modern-day legends
                surrounding the early failures of such supremely successful
                folks as Michael Jordan and Bill Gates. We can look a bit
                further back in time to Albert Einstein or even further back to
                Abraham Lincoln. What made each of these people so successful?
                Motivation.
              </p>
              <a className="btn btn-primary" href="#">
                <span>Accept</span>
              </a>
              <a className="btn btn-dark" href="#">
                <span>Close</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsScreen;
