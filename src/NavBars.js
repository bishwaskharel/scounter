import React, { useState } from "react";
import "./navbars.css";

const NavBars = () => {
  //let a = 1.34;
  //var b = Number(a.toString().split(".")[1]);
  const [total, setTotal] = useState(0);
  const [ball, setBall] = useState(0);

  var a = Number.ball.toString().split(".")[1].toFixed(1);
  
  console.log(a);

  const zero = () => {
    let tt0 = total + 0;
    setTotal(tt0);
    //var ballCount = ball.toString().split("." )[1];
    //console.log(ballCount.toFixed(1));
    //if (ballCount > 7) {
    //  return setBall(ball + 1 - 0.6);
   // } else {
      setBall(ball + 0.1);
    }
  

  const one = () => {
    let tt1 = total + 1;
    setTotal(tt1);
    setBall(ball + 0.1);
  };

  const two = () => {
    let tt2 = total + 2;
    setTotal(tt2);
    setBall(ball + 0.1);
  };
  const three = () => {
    let tt3 = total + 3;
    setTotal(tt3);
    setBall(ball + 0.1);
  };
  const four = () => {
    let tt4 = total + 4;
    setTotal(tt4);
    setBall(ball + 0.1);
  };
  const five = () => {
    let tt5 = total + 5;
    setTotal(tt5);
    setBall(ball + 0.1);
  };
  const six = () => {
    let tt6 = total + 6;
    setTotal(tt6);
    setBall(ball + 0.1);
  };
  const refresh = () => {
    let ref = total - total;
    setTotal(ref);
    setBall(ball - ball);
  };

  return (
    <>
      <div className="navbar">
        <h1>Total Score :{total}</h1>
        <h1>Total Balls :{ball.toFixed(1)}</h1>
        <button className="button" onClick={zero}>
          0
        </button>
        <button className="button" onClick={one}>
          1
        </button>
        <button className="button" onClick={two}>
          2
        </button>
        <button className="button" onClick={three}>
          3
        </button>
        <button className="button" onClick={four}>
          4
        </button>
        <button className="button" onClick={five}>
          5
        </button>
        <button className="button" onClick={six}>
          6
        </button>
        <br></br>
        <button className="button" onClick={refresh}>
          Refresh
        </button>
      </div>
    </>
  );
};

export default NavBars;
