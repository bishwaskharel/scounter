import React from "react";
import india from "./images/india.png";
import australia from "./images/australia.png";
import "./scoreNewsCard.styles.scss";

const ScoreNewsCard = () => {
  return (
    <div className="scoreFlex">
      <div className="scoreBox">
        <div className="scoreBoxFlags">
          <img className="scoreBoxFlagsPer" src={india} alt="" />
          <div className="scoreBoxVS">VS</div>
          <img className="scoreBoxFlagsPer" src={australia} alt="" />
        </div>
        <div className="scoreBoxScores">
        <div className="scoreBoxRuns">175/3</div>
        <p className="scoreBoxOvers">14.5 Overs</p>
        </div>
        <button class="button">Live Score</button>
      </div>
    </div>
  );
};

export default ScoreNewsCard;
