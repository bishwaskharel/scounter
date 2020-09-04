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
          <li>
            <Link to="/BlogPage">Blogs</Link>
          </li>

          <li><Link to="/AboutUsPage">About us</Link></li>
          <li>
            <button class="button-up">Sign In</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
