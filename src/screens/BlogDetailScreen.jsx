import React from "react";
import InnerBanner from "../components/common/InnerBanner";
import BlogDetailPost from "../components/blog-detail/BlogDetailPost";

const BlogDetailScreen = () => {
  return (
    <>
      <InnerBanner
        primaryPageName={"7 Things are Making your Resume look Dated"}
        secondaryPageName={"Home"}
        secondaryPageUrl={"/"}
        textPrimaryColour={false}
      />
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-detail">
                <BlogDetailPost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailScreen;
