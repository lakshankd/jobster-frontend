import React from "react";
import BlogImg01 from "../../assets/images/blog/01.jpg";
import BlogImg02 from "../../assets/images/blog/02.jpg";
import BlogImg03 from "../../assets/images/blog/03.jpg";

const RelatedPosts = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div
          className="owl-carousel "
          data-nav-dots="true"
          data-items="2"
          data-md-items="2"
          data-sm-items="1"
          data-xs-items="1"
          data-xx-items="1"
          data-space="15"
        >
          <div className="item">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={BlogImg01} alt="" />
              </div>
              <div className="blog-post-content">
                <div className="blog-post-details">
                  <div className="blog-post-category">
                    <a className="mb-1" href="#">
                      Recruitment
                    </a>
                  </div>
                  <h5 className="post-title">
                    <a href="#">How women can push for pay equality</a>
                  </h5>
                  <p>
                    If success is a process with a number of defined steps, then
                    it is just like.
                  </p>
                </div>
                <div className="blog-post-footer pb-0">
                  <div className="blog-post-time">
                    <a href="#">
                      <i className="far fa-clock"></i>20 Jan 2022
                    </a>
                  </div>
                  <div className="blog-post-comment">
                    <a href="#">
                      <i className="far fa-comment"></i>(3)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={BlogImg02} alt="" />
              </div>
              <div className="blog-post-content">
                <div className="blog-post-details">
                  <div className="blog-post-category">
                    <a className="mb-1" href="#">
                      Advice
                    </a>
                  </div>
                  <h5 className="post-title">
                    <a href="#">How to sell yourself in a job interview</a>
                  </h5>
                  <p>
                    Having clarity of purpose and a clear picture of what you
                    desire, is probably the single
                  </p>
                </div>
                <div className="blog-post-footer pb-0">
                  <div className="blog-post-time">
                    <a href="#">
                      <i className="far fa-clock"></i>25 March 2022
                    </a>
                  </div>
                  <div className="blog-post-comment">
                    <a href="#">
                      <i className="far fa-comment"></i>(2)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={BlogImg03} alt="" />
              </div>
              <div className="blog-post-content">
                <div className="blog-post-details">
                  <div className="blog-post-category">
                    <a className="mb-1" href="#">
                      Career
                    </a>
                  </div>
                  <h5 className="post-title">
                    <a href="#">Job interview tips for older workers</a>
                  </h5>
                  <p>
                    There are a million distractions in every facet of our
                    lives.
                  </p>
                </div>
                <div className="blog-post-footer pb-0">
                  <div className="blog-post-time">
                    <a href="#">
                      <i className="far fa-clock"></i>30 March 2022
                    </a>
                  </div>
                  <div className="blog-post-comment">
                    <a href="#">
                      <i className="far fa-comment"></i>(5)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
