import React from "react";
import "./blogNews.styles.scss";
import BlogNewsCard from "../blogNewsCard/blogNewsCard.component";
import BlogData from "../Data/BlogData";
import { Link } from "react-router-dom";

const BlogNews = () => {
  return (
    <>
      <div className="blogNewsStart">
        <div className="blogNews">
          <Link to="/BlogPage">
            <button className="button">Sports News</button>
          </Link>
          <div className="blogNewsBox">
            {BlogData.filter((BlogData, idx) => idx < 3).map((val) => {
              return <BlogNewsCard newsImg={val.newsImg} blog={val.blog} />;
            })}
          </div>
        </div>
      </div> 
    </>
  );
};

export default BlogNews;
