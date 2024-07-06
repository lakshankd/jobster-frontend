import React from "react";

const BlogPost = ({
  img,
  postCategory,
  postTitle,
  postDescription,
  date,
  comments,
  shareLinks,
}) => {
  return (
    <div className="blog-post mb-4 mb-sm-5">
      <div className="blog-post-image">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="blog-post-content">
        <div className="blog-post-details">
          <div className="blog-post-category">
            <a className="mb-1" href="#">
              {postCategory}
            </a>
          </div>
          <h5 className="post-title">
            <a href="#">{postTitle}</a>
          </h5>
          <p>{postDescription}</p>
        </div>
        <div className="blog-post-footer">
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
                  <a href={shareLinks?.facebook}>
                    <i className="fab fa-facebook-f"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href={shareLinks?.twitter}>
                    <i className="fab fa-twitter"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href={shareLinks?.linkedin}>
                    <i className="fab fa-linkedin"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href={shareLinks?.instegram}>
                    <i className="fab fa-instagram"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href={shareLinks?.pinterest}>
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

export default BlogPost;
