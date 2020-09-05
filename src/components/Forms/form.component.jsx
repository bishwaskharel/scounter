import React, { useState } from "react";
import "./form.styles.scss";
import logo from "./images/logo.png";
import {Link} from "react-router-dom";

const Form = () => {
  const [textValue, setTextValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleChange = (e) => {
    const id = e.target.textValue;
    const pass = e.target.passwordValue;
    setTextValue(id);
    setPasswordValue(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextValue("");
    setPasswordValue("");
    console.log("Sign In SucessFully!");
  };

  return (
    <>
      <form type="submit" onSubmit={handleSubmit}>
        <div className="border1">
          <img className="image" src={logo} alt="" />
          <div className="border2">
            <input
              value={textValue}
              onChange={handleChange}
              className="box1"
              type="text"
              placeholder="User Name"
            />
            <input
              value={passwordValue}
              onChange={handleChange}
              className="box3"
              type="password"
              placeholder="Password"
            />

            <div className="button">
              <Link to="/GameApp"><button className="button-down">Sign In</button></Link>
              <button className="button-down-register">Register</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
