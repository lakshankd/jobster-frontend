import React from "react";

const JobGridCard = ({
  type,
  img,
  title,
  via,
  location,
  specialism,
  ago,
  url,
}) => {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="job-list job-grid">
        <div className="job-list-logo">
          <span className={type.toLowerCase()}>{type}</span>
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="job-list-details">
          <div className="job-list-info">
            <div className="job-list-title">
              <h5 className="mb-0">
                <a href="job-detail.html">{title}</a>
              </h5>
            </div>
            <div className="job-list-option">
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <span>via</span> <a href={url}>{via}</a>{" "}
                </li>
                <li>
                  <i className="fas fa-map-marker-alt pe-1"></i>
                  {location}
                </li>
                <li>
                  <i className="fas fa-filter pe-1"></i>
                  {specialism}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="job-list-favourite-time">
          {" "}
          <a className="job-list-favourite order-2" href="#">
            <i className="fas fa-heart"></i>
          </a>{" "}
          <span className="job-list-time order-1">
            <i className="far fa-clock pe-1"></i>
            {ago} ago
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default JobGridCard;
