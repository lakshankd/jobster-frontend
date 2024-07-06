import React, { useState } from "react";
import InnerBanner from "../components/common/InnerBanner";
import {
  blogCategoriesData,
  blogData,
  blogWithoutImageData,
  recentPostsData,
} from "../data/blogData";
import BlogPost from "../components/blog/BlogPost";
import BlogPostQuote from "../components/blog/BlogPostQuote";
import BlogPostWithoutImage from "../components/blog/BlogPostWithoutImage";
import RecentPosts from "../components/blog/RecentPosts";
import BlogCategories from "../components/blog/BlogCategories";
import SubscribeAndFollow from "../components/blog/SubscribeAndFollow";
import PopularTags from "../components/blog/PopularTags";
import PageLinks from "../components/blog/PageLinks";

const BlogScreen = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [recentPosts, setRecentPosts] = useState(recentPostsData);
  const [blogCategories, setBlogCategories] = useState(blogCategoriesData);
  const [blogsWithoutImg, setBlogsWithoutImg] = useState(blogWithoutImageData);
  return (
    <>
      <InnerBanner
        primaryPageName={"Blog"}
        secondaryPageName={"Home"}
        secondaryPageUrl={"/"}
      />
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {blogs.map((blog) => (
                <BlogPost key={blog.id} {...blog} />
              ))}

              <BlogPostQuote />

              {blogsWithoutImg.map((blog) => (
                <BlogPostWithoutImage key={blog.id} {...blog} />
              ))}

              <PageLinks />
            </div>
            <div className="col-lg-4 mt-4 mt-sm-5 mt-lg-0">
              <div className="blog-sidebar">
                <RecentPosts recentPosts={recentPosts} />
                <BlogCategories BlogCategories={blogCategories} />
                <SubscribeAndFollow />
                <PopularTags />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogScreen;
