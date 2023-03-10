import React from "react";
import "./WelcomeForm.css";

function WelcomeForm() {
  return (
    <div className="welcome-form">
      <div className="welcome-form__header">
        <h1>Welcome!</h1>
        <p>Please enter your name and lets start our quiz! </p>
      </div>
      <input placeholder="Type your name here..." type="text" />
      <button>
        <span>Start quiz</span>
      </button>
    </div>
  );
}
export default WelcomeForm;
