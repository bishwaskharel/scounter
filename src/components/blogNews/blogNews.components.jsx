import React from "react";
import "./blogNews.styles.scss";
import BlogNewsCard from "../blogNewsCard/blogNewsCard.component";

const BlogNews = () => {
  return (
    <>
    <div className="blogNewsStart">
      <div className="blogNews">
        <button className="button">Sports News</button>
        <div className="blogNewsBox">
        <BlogNewsCard />
        <BlogNewsCard />
        <BlogNewsCard />
      </div>
      </div>
      </div>
    </>
  );
};

export default BlogNews;
