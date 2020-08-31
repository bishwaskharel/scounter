import React from "react";
import "./navbar.styles.scss";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <img class="logo" src={logo} height="40rem" alt="" />
        <ul>
          <li>Blogs</li>
          <li>About Us</li>
          <li>
            <button class="button-up">Sign In</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
