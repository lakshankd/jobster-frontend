import React from "react";

const AccountType = () => {
  return (
    <fieldset>
      <legend className="px-2">Choose your Account Type</legend>
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
                <i className="flaticon-users"></i>
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
                <i className="flaticon-suitcase"></i>
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

export default AccountType;
