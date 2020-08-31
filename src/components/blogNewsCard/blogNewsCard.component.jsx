import React from "react";
import "./blogNewsCard.styles.scss";

function BlogNewsCard() {
  return (
    <div>
      <div className="blogFlex">
        <div className="blogBox">
          <div className="blogBoxFlags">
            <img src="https://picsum.photos/id/1/200/103" alt="" />
          </div>
          <div className="blogBoxblogs">
              Hello This is dummy Text for the score news which i am going to print in my test site.
          </div>
          <button class="button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default BlogNewsCard;
