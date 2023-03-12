import "./Breadcrumbs.css";
import { BsArrowRight } from "react-icons/bs";

function Breadcrumbs() {
  return (
    <div>
      <div className="gradient-line"></div>
      <div className="breadcrumbs">
        <div className="music-type">R&B</div>
        <div className="arrow">
          <BsArrowRight color="#DCA1F8" fontSize="2rem" />
        </div>
        <div className="music-type">JAZZ</div>
        <div className="arrow">
          <BsArrowRight color="#DCA1F8" fontSize="2rem" />
        </div>
        <div className="music-type">TECHNO</div>
        <div className="arrow">
          <BsArrowRight color="#DCA1F8" fontSize="2rem" />
        </div>
        <div className="music-type">SOUL</div>
      </div>
      <div className="border"></div>
    </div>
  );
}
export default Breadcrumbs;
