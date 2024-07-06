import React from "react";

const PopularTags = () => {
  return (
    <div className="blog-post-tags mb-4 align-items-center d-flex">
      <span>Popular-Tags:</span>
      <ul className="list-inline mb-0 mt-2 mt-sm-0 ms-sm-3">
        <li className="list-inline-item">
          <a href="#">Career</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Advice</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Recruitment</a>
        </li>
      </ul>
    </div>
  );
};

export default PopularTags;
