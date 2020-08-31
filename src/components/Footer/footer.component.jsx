import React from "react";
import logo from "./images/logo.png";
import "./footer.styles.scss";

function Footer() {
  return (
    <div className="headFooter">
      <div className="footer">
        <img src={logo} alt="" />
        <div className="footerBarMenu">
          <ul>
            <li>Privacy & Policy</li>
            <li>Feedbacks</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
