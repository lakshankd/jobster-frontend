import React from "react";
import Svg10 from "../../assets/images/svg/10.svg";

const MainJobDetailCard = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="job-list border">
          <div className=" job-list-logo">
            <img className="img-fluid" src={Svg10} alt="" />
          </div>
          <div className="job-list-details">
            <div className="job-list-info">
              <div className="job-list-title">
                <h5 className="mb-0">Marvelous Designer courses</h5>
              </div>
              <div className="job-list-option">
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-map-marker-alt pe-1"></i>
                    Minneapolis, MN 55406
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <span className="ps-2">(123) 345-6789</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job-list-favourite-time">
            <a className="job-list-favourite order-2" href="#">
              <i className="far fa-heart"></i>
            </a>
            <span className="job-list-time order-1">
              <i className="far fa-clock pe-1"></i>2W ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainJobDetailCard;
