import React from "react";
import Img12 from "../../assets/images/gallery/12.jpg";
import Img13 from "../../assets/images/gallery/13.jpg";
import Img14 from "../../assets/images/gallery/14.jpg";

const CandidatePortfolio = () => {
  return (
    <div id="portfolio" className="popup-gallery">
      <h5 className="mb-3">Portfolio</h5>
      <div
        className="owl-carousel mb-lg-5 mb-4"
        data-nav-arrow="false"
        data-items="3"
        data-md-items="3"
        data-sm-items="3"
        data-xs-items="2"
        data-space="15"
      >
        <div className="item">
          <a className="portfolio-img" href="#">
            <img className="img-fluid" src={Img12} alt="" />
          </a>
        </div>
        <div className="item">
          <a className="portfolio-img" href="#">
            <img className="img-fluid" src={Img13} alt="" />
          </a>
        </div>
        <div className="item">
          <a className="portfolio-img" href="#">
            <img className="img-fluid" src={Img14} alt="" />
          </a>
        </div>
      </div>
      <p>
        The sad thing is the majority of people have no clue about what they
        truly want. They have no clarity. When asked the question, responses
        will be superficial at best, and at worst, will be what someone else
        wants for them.
      </p>
    </div>
  );
};

export default CandidatePortfolio;
