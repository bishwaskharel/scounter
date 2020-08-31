import React from "react";
import Forms from "../Forms/form.component";
import busy from "./images/busy.png";
import "./upperBody.styles.scss";

const UpperBody = () => {
  return (
    <>
      <div className="upperBody">
        <img className="bodyimage" src={busy} alt="" />
        <Forms />
      </div>
    </>
  );
};

export default UpperBody;
