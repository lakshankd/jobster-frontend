import React from "react";
import InnerBanner from "../components/common/InnerBanner";
import AboutImg from "../assets/images/about/05.png";
import Testimonial from "../components/about-us/Testimonial";
import CareerOpportunities from "../components/about-us/CareerOpportunities";

const AboutUsScreen = () => {
  return (
    <>
      <InnerBanner
        primaryPageName={"About Us"}
        secondaryPageName={"Home"}
        secondaryPageUrl={"/"}
      />
      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-md-10">
              <h2 className="mb-4">
                Millions of jobs, finds the one that's right for you
              </h2>
            </div>
          </div>
          <div className="row text-center justify-content-center">
            <div className="col-lg-10">
              <div className="text-center">
                <p className="mb-lg-5 mb-4 lead">
                  We also know those epic stories, those modern-day legends
                  surrounding the early failures of such supremely successful
                  folks as Michael Jordan and Bill Gates. We can look a bit
                  further back in time to Albert Einstein or even further back
                  to Abraham Lincoln.
                </p>
                <img
                  className="img-fluid mt-lg-4 mt-3"
                  src={AboutImg}
                  alt="about-section-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CareerOpportunities />
      <Testimonial />
    </>
  );
};

export default AboutUsScreen;
