import React from "react";

const CompanyLinks = () => {
  return (
    <div className="widget border-0">
      <div className="company-detail-meta">
        <ul className="list-unstyled">
          <li className="linkedin">
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
              <span className="ps-2">Apply with Linkedin</span>
            </a>
          </li>
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
                  </a>{" "}
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
  );
};

export default CompanyLinks;
