import Logo from "../elements/Logo";
import PlayScreen from "../elements/PlayScreen";
import Breadcrumbs from "../elements/Breadcrumbs";
import classes from "./GamePage.module.css";
import { PlayerContext, iPlayerContext } from "../App";
import { useContext } from "react";

function GamePage() {
  const { name } = useContext<iPlayerContext>(PlayerContext);
  return (
    <div className={classes.gamePageContainer}>
      <header>
        <Logo />
        <div className={classes.count}>
          <span className={classes.name}>{name}</span>
          <span className={classes.score}>Your score:0</span>
        </div>
      </header>
      <Breadcrumbs />
      <PlayScreen />
      <div className={classes.divWithButton}>
        <button className={classes.nextQuestionButton}>
          <span>NEXT QUESTION </span>
        </button>
      </div>
    </div>
  );
}
export default GamePage;
