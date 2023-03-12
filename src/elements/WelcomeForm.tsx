import React from "react";
import "./WelcomeForm.css";
import { useContext } from "react";
import { PlayerContext, iPlayerContext } from "../App";
import { useNavigate } from "react-router-dom";

function WelcomeForm() {
  const { setName } = useContext<iPlayerContext>(PlayerContext);
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate("/game");
  };
  const setPlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e?.target.value);
  };

  return (
    <div className="welcome-form">
      <div className="welcome-form__header">
        <h1>Welcome!</h1>
        <p>Please enter your name and lets start our quiz! </p>
      </div>

      <input
        placeholder="Type your name here..."
        type="text"
        onChange={setPlayerName}
      />
      <button type="submit" onClick={navigationHandler}>
        <span>Start quiz</span>
      </button>
    </div>
  );
}
export default WelcomeForm;
