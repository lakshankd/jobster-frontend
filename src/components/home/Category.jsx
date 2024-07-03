import React from "react";

const Category = () => {
  return (
    <section className="space-pb j-mt-sm-n6">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="owl-carousel owl-nav-bottom-center category-style-01"
              data-nav-arrow="false"
              data-nav-dots="false"
              data-items="5"
              data-md-items="3"
              data-sm-items="2"
              data-xs-items="2"
              data-xx-items="1"
              data-space="20"
              data-autoheight="true"
            >
              <a href="#" className="category-item">
                <div className="category-icon mb-4">
                  <i className="flaticon-businessman"></i>
                </div>
                <h6>Accountancy</h6>
                <span className="mb-0">140 Open Position </span>
              </a>
              <a href="#" className="category-item">
                <div className="category-icon mb-4">
                  <i className="flaticon-money"></i>
                </div>
                <h6>Purchasing</h6>
                <span className="mb-0">202 Open Position </span>
              </a>
              <a href="#" className="category-item">
                <div className="category-icon mb-4">
                  <i className="flaticon-promotion"></i>
                </div>
                <h6>Sales & Marketing</h6>
                <span className="mb-0">245 Open Position </span>
              </a>
              <a href="#" className="category-item">
                <div className="category-icon mb-4">
                  <i className="flaticon-doctor"></i>
                </div>
                <h6>Health Care</h6>
                <span className="mb-0">514 Open Position </span>
              </a>
              <a href="#" className="category-item">
                <div className="category-icon mb-4">
                  <i className="flaticon-worker"></i>
                </div>
                <h6>IT Contractor</h6>
                <span className="mb-0">120 Open Position </span>
              </a>
              <a href="#" className="category-item">
                <div className="category-icon mb-4">
                  <i className="flaticon-apartment"></i>
                </div>
                <h6>Construction</h6>
                <span className="mb-0">410 Open Position </span>
              </a>
              <a href="#" className="category-item">
                <div className="category-icon mb-4">
                  <i className="flaticon-mortgage"></i>
                </div>
                <h6>Architecture</h6>
                <span className="mb-0">104 Open Position </span>
              </a>
              <a href="#" className="category-item">
                <div className="category-icon mb-4">
                  <i className="flaticon-salary"></i>
                </div>
                <h6>Finance</h6>
                <span className="mb-0">241 Open Position </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
