import "./QuestionBlock.css";
import Audioplayer from "./Audioplayer";

function QuestionBlock() {
  return (
    <div className="questionsContainer">
      <div className="genre-name">Jazz song</div>
      <div className="directions">
        Listen to the audio and guess what song is it from the list
      </div>
      <Audioplayer />
      <div className="options">
        <div className="option__item">
          <div className="checkbox"></div>
          <p>01: Duke Ellington – Take the A Train</p>
        </div>
        <div className="option__item">
          <div className="checkbox"></div>
          <p>02: Miles Davis – So What</p>
        </div>
        <div className="option__item">
          <div className="checkbox"></div>
          <p>03: John Coltrane – Giant Steps</p>
        </div>
        <div className="option__item">
          <div className="checkbox"></div>
          <p>04: Ella Fitzgerald – Mack the Knife</p>
        </div>
      </div>
    </div>
  );
}
export default QuestionBlock;
