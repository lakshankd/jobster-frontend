import React from "react";

const SubscribeAndFollow = () => {
  return (
    <div className="widget">
      <div className="widget-title">
        <h5>Subscribe & Follow</h5>
      </div>
      <div className="social">
        <ul className="list-unstyled">
          <li className="facebook">
            <a className="text-uppercase" href="#">
              {" "}
              <i className="fab fa-facebook-f me-3"></i>Facebook
            </a>
            <a className="follow ms-auto" href="#">
              Like{" "}
            </a>
          </li>
          <li className="twitter">
            <a className="text-uppercase" href="#">
              {" "}
              <i className="fab fa-twitter me-3"></i>twitter
            </a>
            <a className="follow ms-auto" href="#">
              Followers{" "}
            </a>
          </li>
          <li className="youtube">
            <a className="text-uppercase" href="#">
              {" "}
              <i className="fab fa-youtube me-3"></i>youtube
            </a>
            <a className="follow ms-auto" href="#">
              Subscribers{" "}
            </a>
          </li>
          <li className="instagram">
            <a className="text-uppercase" href="#">
              {" "}
              <i className="fab fa-instagram me-3"></i>instagram
            </a>
            <a className="follow ms-auto" href="#">
              Followers{" "}
            </a>
          </li>
          <li className="linkedin">
            <a className="text-uppercase" href="#">
              {" "}
              <i className="fab fa-linkedin-in me-3"></i>linkedin
            </a>
            <a className="follow ms-auto" href="#">
              Followers{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubscribeAndFollow;
