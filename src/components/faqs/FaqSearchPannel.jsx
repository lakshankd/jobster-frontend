import React from "react";

const FaqSearchPannel = () => {
  return (
    <div className="widget">
      <div className="widget-title mb-0">
        <h5 className="mb-0">Search</h5>
      </div>
      <div className="search widget-box">
        <i className="fas fa-search"></i>
        <input
          className="form-control"
          type="text"
          placeholder="Search Keywords"
        />
      </div>
    </div>
  );
};

export default FaqSearchPannel;
