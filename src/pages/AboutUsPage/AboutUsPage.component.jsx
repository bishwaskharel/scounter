import React from "react";
import "./AboutUsPage.styles.scss";
function AboutUsPage() {
  return (
    <div className="aboutUsPage" style={{ height: "100vh" }}>
      <iframe
        title="aboutUsPage"
        src="https://embedstream.me/india-vs-new-zealand-stream-2"
        width="100%"
        height="80%"
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
          width: "100%",
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
