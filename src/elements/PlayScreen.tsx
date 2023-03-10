import classes from "./PlayScreen.module.css";
import QuestionBlock from "./QuestionBlock";
import VideoBlock from "./VideoBlock";

function PlayScreen() {
  return (
    <div className={classes.playscreen}>
      <QuestionBlock />
      <VideoBlock />
      {/* <img
        className={classes.circleImage}
        src="/assets/images/Union.png"
        alt="decoration"
      /> */}
    </div>
  );
}
export default PlayScreen;
