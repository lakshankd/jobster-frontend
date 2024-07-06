import React from "react";

const PostNavigation = () => {
  return (
    <nav className="navigation post-navigation">
      <div className="nav-links">
        <div className="nav-previous">
          <a href="#">
            <span className="pagi-text"> PREV</span>
            <span className="nav-title"> Lawn court villa</span>
          </a>
        </div>
        <div className="nav-next">
          <a href="#">
            <span className="nav-title"> Executive 4 bed WDM ranch</span>{" "}
            <span className="pagi-text">NEXT</span>
          </a>{" "}
        </div>
      </div>
    </nav>
  );
};

export default PostNavigation;
