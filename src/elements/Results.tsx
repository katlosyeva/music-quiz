import React from "react";
import classes from "./Results.module.css";
import { iPlayerContext, PlayerContext } from "../App";

function Results() {
  const { name } = React.useContext<iPlayerContext>(PlayerContext);
  return (
    <div>
      <div className={classes.image}>
        <img src="../assets/images/Union.png" alt="decoration" />
      </div>
      <div className={classes.score}>
        <div>13</div>
      </div>
      <div className={classes.results}>
        <h1>`${name}, you did so great!`</h1>
        <p>You got 13 out of 20 points. You are definitely a music lover!</p>

        <button>
          <span>TRY AGAIN</span>
        </button>
      </div>
    </div>
  );
}
export default Results;
