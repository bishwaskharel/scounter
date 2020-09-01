import React from "react";
import "./blogNews.styles.scss";
import BlogNewsCard from "../blogNewsCard/blogNewsCard.component";
import BlogData from "../Data/BlogData";
const BlogNews = () => {
  return (
    <>
      <div className="blogNewsStart">
        <div className="blogNews">
          <button className="button">Sports News</button>
          <div className="blogNewsBox">
            {BlogData.map((val) => {
              return <BlogNewsCard newsImg={val.newsImg} blog={val.blog} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogNews;
