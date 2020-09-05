import React from "react";
import "./navbar.styles.scss";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} height="40rem" alt="" />
        </Link>
        <ul>
          <Link to="/BlogPage">
            <li>Blogs</li>
          </Link>

          
            <Link to="/AboutUsPage"><li>About Us</li></Link>
          
          <li>
            <button className="button-up">Register</button>
          </li>
        </ul> 
      </nav>
    </>
  );
};

export default Navbar;
