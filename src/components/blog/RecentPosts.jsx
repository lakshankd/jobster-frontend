import React from "react";

const RecentPosts = ({ recentPosts }) => {
  return (
    <div className="widget">
      <div className="widget-title">
        <h5>Recent Posts</h5>
      </div>
      {recentPosts?.map((post) => (
        <div key={post.id} className="d-flex mb-3 align-items-start">
          <div className="avatar avatar-xl">
            <img className="img-fluid" src={post.img} alt="" />
          </div>
          <div className="ms-3 recent-posts">
            <a href="#">
              <b>{post.postTitle}</b>
            </a>
            <a className="d-block font-sm mt-1 text-light" href="#">
              {post.date}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
