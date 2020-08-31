import React from "react";
import "./form.styles.scss";
import logo from "./images/logo.png";

const Form = () => {
  return (
    <>
      <form>
        <div className="border1">
          <img className="image" src={logo} alt="" />
          <div className="border2">
            <input className="box1" type="text" placeholder="User Name" />
            <input className="box2" type="email" placeholder="Email" />
            <input className="box3" type="password" placeholder="Password" />
            <button className="button-down">Register</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
