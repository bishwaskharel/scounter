import React from "react";
import "./blogNewsCard.styles.scss";
import { Link } from "react-router-dom";
function BlogNewsCard(props) {
  return (
    <div>
      <div className="blogFlex">
        <div className="blogBox">
          <div className="blogBoxFlags">
            <img src={props.newsImg} alt="" />
          </div>
          <div className="blogBoxblogs">{props.blog}</div>
          <button class="button">
            <Link to="/BlogPage">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogNewsCard;
