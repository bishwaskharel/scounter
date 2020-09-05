import React from "react";
import ScoreNewsCard from "../scoreNewsCard/scoreNewsCard.components";
import "./scoreNews.styles.scss";
import ScoreData from "../Data/ScoreData";

const ScoreNews = () => {
  return (
    <>
      <div className="scoreNewsStart">
        <div className="scoreNews">
          <button className="button">Score News</button>
          <div className="scoreNewsBox">
            {ScoreData.filter((ScoreData, idx) => idx< 3).map((val) => {
              return(
              <ScoreNewsCard
                flag1={val.flag1}
                flag2={val.flag2}
                cScore={val.cScore}
                cOver={val.cOver}
              /> 
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreNews;
