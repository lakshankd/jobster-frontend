import React from "react";

const PopularTags = () => {
  return (
    <div className="widget">
      <div className="widget-title">
        <h5>Popular Tags</h5>
      </div>
      <div className="popular-tag">
        <ul className="list-unstyled mb-0">
          <li>
            <a href="#">Bootstrap</a>
          </li>
          <li>
            <a href="#">HTML5</a>
          </li>
          <li>
            <a href="#">Wordpress</a>
          </li>
          <li>
            <a href="#">CSS3</a>
          </li>
          <li>
            <a href="#">Creative</a>
          </li>
          <li>
            <a href="#">Multipurpose</a>
          </li>
          <li>
            <a href="#">Fashion</a>
          </li>
          <li>
            <a href="#">Color</a>
          </li>
          <li>
            <a href="#">Lifestyle</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopularTags;
