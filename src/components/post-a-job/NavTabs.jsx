import React from "react";

const NavTabs = () => {
  return (
    <div className="col-lg-4 col-xl-3">
      <ul
        className="nav nav-tabs nav-tabs-style-03 bg-white p-4 shadow-sm mb-lg-0 mb-4"
        id="myTab"
        role="tablist"
      >
        <li>
          <a
            className="nav-item mb-5 active"
            id="Job-detail-tab"
            data-bs-toggle="tab"
            href="#Job-detail"
            role="tab"
            aria-controls="Job-detail"
            aria-selected="false"
          >
            <div className="feature-info-icon">
              <i className="flaticon-suitcase"></i>
            </div>
            <span>Job Detail</span>
          </a>
        </li>
        <li>
          <a
            className="nav-item mb-5"
            id="Package-tab"
            data-bs-toggle="tab"
            href="#Package"
            role="tab"
            aria-controls="Package"
            aria-selected="false"
          >
            <div className="feature-info-icon">
              <i className="flaticon-debit-card"></i>
            </div>
            <span>Package &amp; Payments</span>
          </a>
        </li>
        <li>
          <a
            className="nav-item"
            id="Confirm-tab"
            data-bs-toggle="tab"
            href="#Confirm"
            role="tab"
            aria-controls="Confirm"
            aria-selected="false"
          >
            <div className="feature-info-icon">
              <i className="flaticon-tick"></i>
            </div>
            <span>Confirmation</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavTabs;
