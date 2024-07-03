import React from "react";
import BlogImg03 from "../../assets/images/blog/03.jpg";
import BlogImg04 from "../../assets/images/blog/04.jpg";
import BlogImg05 from "../../assets/images/blog/05.jpg";

const LatestBlogPosts = () => {
  return (
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="section-title center">
              <h2 className="title">
                <span>Check Out Our Latest Blog Posts</span>
              </h2>
              <p>
                Data trends and insights, tips for employers, product updates
                and best practices
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="blog-post">
              <div className="blog-post-image">
                <img
                  className="img-fluid"
                  src={BlogImg03}
                  alt="blog-post-img"
                />
              </div>
              <div className="blog-post-content">
                <div className="blog-post-details pb-0">
                  <div className="blog-post-time">
                    <a href="#">February 4, 2022</a>
                  </div>
                  <div className="blog-post-title">
                    <h5>
                      <a href="#">How to sell yourself in a job interview</a>
                    </h5>
                  </div>
                  <a className="btn btn-link p-0" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="blog-post">
              <div className="blog-post-image">
                <img
                  className="img-fluid"
                  src={BlogImg04}
                  alt="blog-post-img"
                />
              </div>
              <div className="blog-post-content">
                <div className="blog-post-details pb-0">
                  <div className="blog-post-time">
                    <a href="#">March 10, 2022</a>
                  </div>
                  <div className="blog-post-title">
                    <h5>
                      <a href="#">Hype or Helpful to the Jobs Market?</a>
                    </h5>
                  </div>
                  <a className="btn btn-link p-0" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-post">
              <div className="blog-post-image">
                <img
                  className="img-fluid"
                  src={BlogImg05}
                  alt="blog-post-img"
                />
              </div>
              <div className="blog-post-content">
                <div className="blog-post-details pb-0">
                  <div className="blog-post-time">
                    <a href="#">May 15, 2022</a>
                  </div>
                  <div className="blog-post-title">
                    <h5>
                      <a href="#">How to become an Account Manager</a>
                    </h5>
                  </div>
                  <a className="btn btn-link p-0" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
