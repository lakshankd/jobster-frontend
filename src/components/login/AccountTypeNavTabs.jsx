import React from "react";

const AccountTypeNavTabs = () => {
  return (
    <fieldset className="border-redush-0">
      <h6 className="mb-3">Choose your Account Type</h6>
      <ul className="nav nav-tabs nav-tabs-border d-flex" role="tablist">
        <li className="nav-item me-4">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#candidate"
            role="tab"
            aria-selected="false"
          >
            <div className="d-flex">
              <div className="tab-icon">
                <i className="flaticon-selection"></i>
              </div>
              <div className="ms-3">
                <h6 className="mb-0">Candidate</h6>
                <p className="mb-0">Log in as Candidate</p>
              </div>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#employer"
            role="tab"
            aria-selected="false"
          >
            <div className="d-flex">
              <div className="tab-icon">
                <i className="flaticon-manager"></i>
              </div>
              <div className="ms-3">
                <h6 className="mb-0">Employer</h6>
                <p className="mb-0">Log in as Employer</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </fieldset>
  );
};

export default AccountTypeNavTabs;
