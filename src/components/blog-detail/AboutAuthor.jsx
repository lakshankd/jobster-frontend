import React from "react";
import AvatarImg01 from "../../assets/images/avatar/01.jpg";

const AboutAuthor = () => {
  return (
    <div className="mt-4">
      <h5 className="mb-3">About Author</h5>
      <div className="border p-4">
        <div className="d-sm-flex">
          <div className="avatar avatar-xlll mb-3 mb-sm-0">
            <img
              className="img-fluid rounded-circle"
              src={AvatarImg01}
              alt=""
            />
          </div>
          <div className="ps-sm-4">
            <h6 className="mb-3">
              {" "}
              <span className="text-primary"> Posted by:</span> Alice Williams
            </h6>
            <p>
              SMART is an acronym for Specific, Measurable, Achievable,
              Realistic and Time Sensitive – S-M-A-R-T. Knowing what you want
              and setting SMART goals as mileposts on your quest cannot help but
              give you clarity!
            </p>
            <div className="social-icon d-flex">
              <span>Follow us:</span>
              <ul className="list-unstyled mb-0 ms-3 list-inline">
                <li className="list-inline-item">
                  {" "}
                  <a href="#">
                    {" "}
                    <i className="fab fa-facebook-f"></i>{" "}
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a href="#">
                    {" "}
                    <i className="fab fa-twitter"></i>{" "}
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a href="#">
                    {" "}
                    <i className="fab fa-instagram"></i>{" "}
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a href="#">
                    {" "}
                    <i className="fab fa-linkedin"></i>{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
