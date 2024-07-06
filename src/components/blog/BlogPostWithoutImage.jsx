import React from "react";

const BlogPostWithoutImage = ({
  postCategory,
  postTitle,
  postDescription,
  date,
  comments,
  shareLinks,
}) => {
  return (
    <div className="blog-post post-without-image mt-4 mt-sm-5 text-center">
      <div className="blog-post-content pt-0">
        <div className="blog-post-details mt-4 mt-md-5">
          <div className="blog-post-category">
            <a className="mb-1" href="#">
              {postCategory}
            </a>
          </div>
          <div className="blog-post-title">
            <h4>
              <a href="#">{postTitle}</a>
            </h4>
          </div>
          <div className="blog-post-description">
            <p className="mb-0">{postDescription}</p>
          </div>
        </div>
        <div className="blog-post-footer mt-4 mt-md-5">
          <div className="blog-post-time">
            <a href="#">
              <i className="far fa-clock"></i>
              {date}
            </a>
          </div>
          <div className="blog-post-comment">
            <a href="#">
              <i className="far fa-comment"></i>({comments})
            </a>
          </div>
          <div className="blog-post-share">
            <div className="share-box">
              <a href="#">
                {" "}
                <i className="fas fa-share-alt"></i>
                <span className="ps-2">Share</span>
              </a>
              <ul className="list-unstyled share-box-social">
                <li>
                  {" "}
                  <a href={shareLinks.facebook}>
                    <i className="fab fa-facebook-f"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href={shareLinks.twitter}>
                    <i className="fab fa-twitter"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href={shareLinks.linkedin}>
                    <i className="fab fa-linkedin"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href={shareLinks.instagram}>
                    <i className="fab fa-instagram"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href={shareLinks.pinterest}>
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

export default BlogPostWithoutImage;
