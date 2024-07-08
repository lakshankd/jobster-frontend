import React from "react";

const SocialLoginButtons = () => {
  return (
    <fieldset>
      <legend className="px-2">Login or Sign up with</legend>
      <div className="social-login">
        <ul className="list-unstyled d-flex mb-0">
          <li className="facebook text-center">
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f me-3 me-md-4"></i>
              Login with Facebook
            </a>
          </li>
          <li className="twitter text-center">
            <a href="#">
              {" "}
              <i className="fab fa-twitter me-3 me-md-4"></i>Login with Twitter
            </a>
          </li>
          <li className="google text-center">
            <a href="#">
              {" "}
              <i className="fab fa-google me-3 me-md-4"></i>Login with Google
            </a>
          </li>
          <li className="linkedin text-center">
            <a href="#">
              {" "}
              <i className="fab fa-linkedin-in me-3 me-md-4"></i>
              Login with Linkedin
            </a>
          </li>
        </ul>
      </div>
    </fieldset>
  );
};

export default SocialLoginButtons;
