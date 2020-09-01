import React from "react";
import "./blogNewsCard.styles.scss";

function BlogNewsCard(props) {
  return (
    <div>
      <div className="blogFlex">
        <div className="blogBox">
          <div className="blogBoxFlags">
            <img src={props.newsImg} alt="" />
          </div>
          <div className="blogBoxblogs">
              {props.blog}
          </div>
          <button class="button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default BlogNewsCard;
