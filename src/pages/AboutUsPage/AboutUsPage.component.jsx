import React from "react";
import "./AboutUsPage.styles.scss";
function AboutUsPage() {
  return (
    <div className="aboutUsPage" style={{ height: "100vh" }}>
      <iframe
        title="aboutUsPage"
        src="https://embedstream.me/pakistan-vs-australia-stream-1"
        scrolling="no"
        frameborder="0"
        allowfullscreen
        allowtransparency
        referrerpolicy="unsafe-url"
        style={{
          overflow: "hidden",
          overflowx: "hidden",
          overflowy: "hidden",
          height: "100%",
          width: "90%",
          margin: "0 auto",
          position: "absolute",
          top: "0%",
          left: "0px",
          right: "0px",
          bottom: "0px",
        }}
      ></iframe>
    </div>
  );
}

export default AboutUsPage;
