import React from "react";

const BlogPostQuote = () => {
  return (
    <div className="blog-post blog-post-quote mt-4 bg-primary">
      <div className="blog-post-content">
        <div className="blockquote text-center">
          <blockquote className="text-white mb-0">
            <i className="fas fa-quote-right"></i>
            <p>
              We know this in our gut, but what can we do about it? How can we
              motivate ourselves? One of the most difficult aspects of achieving
              success is staying motivated over the long haul.
            </p>
            <cite>– Daniel Pink</cite>
          </blockquote>
        </div>
        <div className="blog-post-details text-center">
          <div className="blog-post-category">
            <a className="mb-1" href="#">
              Creative
            </a>
          </div>
          <div className="blog-post-title mt-3">
            <h5>
              <a href="#">Blogpost With blockquote </a>
            </h5>
          </div>
        </div>
        <div className="blog-post-footer mt-4 mt-md-5">
          <div className="blog-post-time">
            <a href="#">
              <i className="far fa-clock"></i>25 March 2022
            </a>
          </div>
          <div className="blog-post-comment">
            <a href="#">
              <i className="far fa-comment"></i>(1)
            </a>
          </div>
          <div className="blog-post-share">
            <div className="share-box share-dark-bg">
              <a href="#">
                {" "}
                <i className="fas fa-share-alt"></i>
                <span className="ps-2">Share</span>
              </a>
              <ul className="list-unstyled share-box-social">
                <li>
                  {" "}
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostQuote;
