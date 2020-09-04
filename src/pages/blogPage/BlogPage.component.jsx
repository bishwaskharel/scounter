import React from "react";
import "./blogPage.styles.scss";
import BlogPageNews from "../../components/blogPageNews/BlogPageNews.component";
import BlogData from "../../components/Data/BlogData";
function BlogPage() {
  return (
    <div className="blogPage">
      <div className="blogPageNews">
        <BlogPageNews
          newsImg={BlogData[0].newsImg}
          title={BlogData[0].title}
          blog={BlogData[0].blog}
        />
      </div>
      <div className="blogPageInfo">
        <h1>Score Card</h1>
        <h1>Blog card</h1>
      </div>
    </div>
  );
}

export default BlogPage;
