import React from "react";
import "./blogPage.styles.scss";
import BlogNewsCard from "../../components/blogNewsCard/blogNewsCard.component";
import BlogData from "../../components/Data/BlogData";
function BlogPage() {
  return (
    <div className="BlogPage">
      {BlogData.map((val) => {
        return (
          <BlogNewsCard
            className="BlogNewsCard"
            newsImg={val.newsImg}
            blog={val.blog}
          />
        );
      })}
    </div>
  );
}

export default BlogPage;
