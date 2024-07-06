import React from "react";

function CompanyDetails() {
  return (
    <div className="widget">
      <div className="company-address widget-box">
        <ul className="list-unstyled mt-3">
          <li>
            <a href="#">
              <i className="fas fa-link fa-fw"></i>
              <span className="ps-2">www.infojob.com</span>
            </a>
          </li>
          <li>
            <a href="tel:+905389635487">
              <i className="fa-solid fa-phone"></i>
              <span className="ps-2">+(456) 478-2589</span>
            </a>
          </li>
          <li>
            <a href="mailto:ali.potenza@job.com">
              <i className="fas fa-envelope fa-fw"></i>
              <span className="ps-2">support@jobster.demo</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CompanyDetails;
