import React from "react";

const SavedJobCard = ({
  img,
  title,
  type,
  company,
  location,
  category,
  time,
}) => {
  return (
    <div className="col-12">
      <div className="job-list border-bottom">
        <div className="job-list-logo">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="job-list-details">
          <div className="job-list-info">
            <div className="job-list-title">
              <h5 className="mb-0">
                <a href="/job-detail">{title}</a>
              </h5>
              <span className={type.toLowerCase()}>{type}</span>
            </div>
            <div className="job-list-option">
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <span>via</span> <a href="/employer-detail">{company}</a>{" "}
                </li>
                <li>
                  <i className="fas fa-map-marker-alt pe-1"></i>
                  {location}
                </li>
                <li>
                  <i className="fas fa-filter pe-1"></i>
                  {category}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="job-list-favourite-time">
          {" "}
          <a className="job-list-favourite order-2" href="#">
            <i className="fas fa-heart text-danger"></i>
          </a>{" "}
          <span className="job-list-time order-1">
            <i className="far fa-clock pe-1"></i>
            {time}
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default SavedJobCard;
