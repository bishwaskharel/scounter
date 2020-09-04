import React from "react";
import "./BlogPageNews.styles.scss";

function BlogPageNews(props) {
  return (
    <div>
      <div className="blogPageHead">
        <h1>{props.title}</h1>
        <img src={props.newsImg} alt="" />
      </div>
      
      <div className="finalNews">
      <h1>{props.blog}</h1>
      </div>
    </div>
  );
}

export default BlogPageNews;
