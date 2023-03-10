import Logo from "../elements/Logo";
import PlayScreen from "../elements/PlayScreen";
import Breadcrumbs from "../elements/Breadcrumbs";
import "./GamePage.css";

function GamePage() {
  return (
    <div className="gamePageContainer">
      <header>
        <Logo />
        <div className="count">
          <span className="name">IRYNA</span>
          <span className="score">Your score:0</span>
        </div>
      </header>
      <Breadcrumbs />
      <PlayScreen />
      <div className="div-with-button">
        <button>
          <span>NEXT QUESTION </span>
        </button>
      </div>
    </div>
  );
}
export default GamePage;
