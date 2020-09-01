import React from "react";

import "./scoreNewsCard.styles.scss";

const ScoreNewsCard = (props) => {
  return (
    <div className="scoreFlex">
      <div className="scoreBox">
        <div className="scoreBoxFlags">
          <img className="scoreBoxFlagsPer" src={props.flag1} alt="" />
          <div className="scoreBoxVS">VS</div>
          <img className="scoreBoxFlagsPer" src={props.flag2} alt="" />
        </div>
        <div className="scoreBoxScores">
          <div className="scoreBoxRuns">{props.cScore}</div>
          <p className="scoreBoxOvers">{props.cOver}</p>
        </div>
        <button class="button">Live Score</button>
      </div>
    </div>
  );
};

export default ScoreNewsCard;
