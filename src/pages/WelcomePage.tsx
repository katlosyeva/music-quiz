import React from "react";
import "./WelcomePage.css";
import WelcomeForm from "../elements/WelcomeForm";
import Logo from "../elements/Logo";

function WelcomePage() {
  return (
    <div className="welcomePagecContainer">
      <header className="logo">
        <Logo />
      </header>
      <WelcomeForm />
    </div>
  );
}
export default WelcomePage;
