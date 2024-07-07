import React from "react";

const OtherSignUpMethods = () => {
  return (
    <fieldset>
      <h6 className="mb-3">Login or Sign up with</h6>
      <div className="social-login">
        <ul className="list-unstyled d-flex mb-0">
          <li className="facebook text-center">
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f me-4"></i>Login with Facebook
            </a>
          </li>
          <li className="twitter text-center">
            <a href="#">
              {" "}
              <i className="fab fa-twitter me-4"></i>Login with Twitter
            </a>
          </li>
          <li className="google text-center">
            <a href="#">
              {" "}
              <i className="fab fa-google me-4"></i>Login with Google
            </a>
          </li>
          <li className="linkedin text-center">
            <a href="#">
              {" "}
              <i className="fab fa-linkedin-in me-4"></i>Login with Linkedin
            </a>
          </li>
        </ul>
      </div>
    </fieldset>
  );
};

export default OtherSignUpMethods;
