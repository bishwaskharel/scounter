import React from "react";
import Forms from "../Forms/form.component";
import busy from "./images/busy.png";
import "./upperBody.styles.scss";

const UpperBody = () => {
  return (
    <>
      <div className="upperBody">
        <div>
          <img className="bodyimage" src={busy} alt="" />
        </div>
        <div className="forms">
          <Forms />
        </div>
      </div>
    </>
  );
};

export default UpperBody;
