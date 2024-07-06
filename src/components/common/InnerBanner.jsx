import React from "react";

const InnerBanner = ({
  primaryPageName,
  secondaryPageName,
  secondaryPageUrl,
  textPrimaryColour = true,
}) => {
  return (
    <div className="header-inner bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className={`${textPrimaryColour ? "text-primary" : ""} `}>
              {primaryPageName}
            </h2>
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href={secondaryPageUrl}> {secondaryPageName} </a>
              </li>
              <li className="breadcrumb-item active">
                {" "}
                <i className="fas fa-chevron-right"></i>{" "}
                <span> {primaryPageName} </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
