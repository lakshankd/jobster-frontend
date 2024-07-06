import React from "react";
import AvatarImg04 from "../../assets/images/avatar/04.jpg";

const CandidateDetailBanner = () => {
  return (
    <div className="candidate-banner bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="candidate-list bg-light pb-5">
              <div className="candidate-list-image">
                <img className="img-fluid" src={AvatarImg04} alt="" />
              </div>
              <div className="candidate-list-details">
                <div className="candidate-list-info">
                  <div className="candidate-list-title">
                    <h5 className="mb-0">Nichole Haynes</h5>
                  </div>
                  <div className="candidate-list-option">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-filter pe-1"></i>IT Contractor
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt pe-1"></i>24 SL
                        Road, London. UK
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget ms-auto mb-0">
                <div className="company-detail-meta ms-auto">
                  <a className="btn btn-primary" href="#">
                    Download CV <i className="fas fa-download ms-1"></i>
                  </a>
                  <ul className="list-unstyled mt-3 mb-0 ms-2 ms-sm-0">
                    <li>
                      <div className="share-box share-dark-bg">
                        <a href="#">
                          {" "}
                          <i className="fas fa-share-alt"></i>
                          <span className="ps-2">Share</span>
                        </a>
                        <ul className="list-unstyled share-box-social">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-linkedin"></i>
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-pinterest"></i>
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-print"></i>
                        <span className="ps-2">Print</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailBanner;
