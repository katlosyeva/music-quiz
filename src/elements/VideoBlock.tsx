import React from "react";
import classes from "./VideoBlock.module.css";
import Videoplayer from "./Videoplayer";
const VideoBlock = () => {
  return (
    <div className={classes.videoBlock}>
      <div className={classes.title}>01: Duke Ellington – Take the A Train</div>
      <Videoplayer />
      <div className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        dolores optio pariatur similique, id ut tempore. Esse, assumenda natus
        exercitationem ducimus corporis earum eius ab, architecto rerum culpa
        eum odit.
      </div>
    </div>
  );
};

export default VideoBlock;
