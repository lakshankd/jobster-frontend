import React from "react";

const ComingSoonFollowUs = () => {
  return (
    <div className="login-social-media my-4 my-md-5">
      <div className="d-block">
        <h6 className="mb-4">Follow us on:</h6>
        <a className="btn facebook-bg social-bg-hover mb-2 mb-sm-0" href="#">
          <span>
            <i className="fab fa-facebook-f"></i>Facebook
          </span>
        </a>
        <a className="btn twitter-bg social-bg-hover mb-2 mb-sm-0" href="#">
          <span>
            <i className="fab fa-twitter"></i>Twitter
          </span>
        </a>
        <a className="btn google-bg social-bg-hover mb-2 mb-sm-0" href="#">
          <span>
            <i className="fab fa-google"></i>Google
          </span>
        </a>
      </div>
    </div>
  );
};

export default ComingSoonFollowUs;
