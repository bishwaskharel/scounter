import React from "react";
import ScoreNewsCard from "../scoreNewsCard/scoreNewsCard.components";
import "./scoreNews.styles.scss";

const ScoreNews = () => {
  return (
    <>
    <div className="scoreNewsStart">
      <div className="scoreNews">
        <button className="button">Score News</button>
        <div className="scoreNewsBox">
          <ScoreNewsCard />
          <ScoreNewsCard />
          <ScoreNewsCard />
        </div>
      </div>
      </div>
    </>
  );
};

export default ScoreNews;
