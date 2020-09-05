import React from "react";
import BlogPageNews from "../../components/blogPageNews/BlogPageNews.component";
import BlogData from "../../components/Data/BlogData";
import "./newsPage.styles.scss";
import ScoreData from "../../components/Data/ScoreData";

import ScoreNewsCard from "../../components/scoreNewsCard/scoreNewsCard.components";
import BlogNewsCard from "../../components/blogNewsCard/blogNewsCard.component";

function NewsPage1() {
  return (
    <div>
      <div className="blogPage">
        <div className="blogPageNews">
          <BlogPageNews
            newsImg={BlogData[0].newsImg}
            title={BlogData[0].title}
            blog={BlogData[0].blog}
          />
        </div>
        <div className="blogPageInfo">
          <div>
            {ScoreData.filter((ScoreData, idx) => idx < 2).map((val) => {
              return (
                <ScoreNewsCard
                  flag1={val.flag1}
                  flag2={val.flag2}
                  cScore={val.cScore}
                  cOver={val.cOver}
                />
              );
            })}
          </div>
          <div>
            {BlogData.filter((BlogData, idx) => idx < 2).map((val) => {
              return <BlogNewsCard newsImg={val.newsImg} blog={val.blog} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage1;
