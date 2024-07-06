import React from "react";
import ReplyForm from "./ReplyForm";
import PostNavigation from "./PostNavigation";
import PopularTags from "./PopularTags";
import AboutAuthor from "./AboutAuthor";
import RelatedPosts from "./RelatedPosts";
import Comments from "./Comments";
import BlogImg01 from "../../assets/images/blog/01.jpg";
import BlogImg02 from "../../assets/images/blog/02.jpg";
import BlogImg04 from "../../assets/images/blog/04.jpg";

const BlogDetailPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-post-title">
        <h4>7 Things are Making your Resume look Dated</h4>
      </div>
      <div className="blog-post-category">
        <a className="mb-0" href="#">
          Recruitment
        </a>
      </div>
      <div className="blog-post-footer py-4 border-0">
        <div className="blog-post-time">
          <a href="#">
            <i className="far fa-clock"></i>25 March 2022
          </a>
        </div>
        <div className="blog-post-comment">
          <a href="#">
            <i className="far fa-comment"></i>(5)
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

      <div className="blog-post-image">
        <img className="img-fluid" src={BlogImg01} alt="" />
      </div>
      <div className="blog-post-content">
        <div className="blog-post-description">
          <p className="mb-0">
            The first thing to remember about success is that it is a process –
            nothing more, nothing less. There is really no magic to it and it’s
            not reserved only for a select few people. As such, success really
            has nothing to do with luck, coincidence or fate. It really comes
            down to understanding.
          </p>
        </div>
        <i className="text-primary d-block lead my-3">
          There are basically six key areas to higher achievement. Some people
          will tell you there are four while others may tell you there are
          eight. One thing for certain though, is that.
        </i>
        <p>
          If success is a process with a number of defined steps, then it is
          just like any other process. So, what is the first step in any
          process?
        </p>
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid mb-3" src={BlogImg02} alt="" />
          </div>
          <div className="col-lg-6 mb-3">
            <img className="img-fluid" src={BlogImg04} alt="" />
          </div>
        </div>
        <p>
          Making a decision to do something – this is the first step. We all
          know that nothing moves until someone makes a decision. The first
          action is always in making the decision to proceed. This is a
          fundamental step, which most people overlook.
        </p>
        <blockquote className="blockquote">
          <p>
            Without clarity, you send a very garbled message out to the
            Universe. We know that the Law of Attraction says that we will
            attract what we focus on, so if we don’t have clarity, we will
            attract confusion.
          </p>
          <cite>– Alice Williams</cite>
        </blockquote>
        <p>
          The sad thing is the majority of people have no clue about what they
          truly want. They have no clarity. When asked the question, responses
          will be superficial at best, and at worst.
        </p>
        <PopularTags />
        <PostNavigation />
        <AboutAuthor />
        <div className="mt-4">
          <h5 className="mb-3">Related Post</h5>
          <RelatedPosts />
          <hr className="my-5" />
          <Comments />
          <ReplyForm />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPost;
