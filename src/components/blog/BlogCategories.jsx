import React from "react";

const BlogCategories = ({ BlogCategories }) => {
  return (
    <div className="widget">
      <div className="widget-title">
        <h5>Categories</h5>
      </div>
      <ul className="list-unstyled list-style mb-0">
        {BlogCategories?.map((category) => (
          <li key={category.id}>
            <a href={category.url}>
              {category.categoryName}
              <span className="ms-auto">({category.totalPosts})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
