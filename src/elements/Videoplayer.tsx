import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

import classes from "./Videoplayer.module.css";

const Videoplayer: React.FC = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const videoPlayer = useRef<HTMLVideoElement>(null); // reference our video component
  const progressBar = useRef<HTMLInputElement>(null); // reference our progress bar
  const animationRef = useRef<any>(); // reference the animation

  useEffect(() => {
    if (videoPlayer.current && progressBar?.current) {
      const seconds = Math.floor(videoPlayer.current?.duration);
      setDuration(seconds);
      progressBar.current.max = seconds.toString();
    }
  }, [
    videoPlayer?.current?.onloadedmetadata,
    videoPlayer?.current?.readyState,
  ]);

  const calculateTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = (): void => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      videoPlayer.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      videoPlayer.current?.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    if (videoPlayer.current?.currentTime && progressBar.current) {
      progressBar.current.value = videoPlayer.current?.currentTime.toString();
    }
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    if (videoPlayer.current?.currentTime && progressBar.current?.value) {
      videoPlayer.current.currentTime = +progressBar.current?.value;
    }
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    if (progressBar.current?.value) {
      progressBar.current?.style.setProperty(
        "--seek-before-width",
        `${(+progressBar.current.value / duration) * 100}%`
      );
      setCurrentTime(+progressBar.current.value);
    }
  };

  return (
    <div className={classes.videoContainer}>
      <video
        // height="450rem"

        ref={videoPlayer}
        src="..\assets\images\VID_20211002_143624.mp4"
        preload="metadata"
      ></video>
      <div className={classes.controls}>
        <button onClick={togglePlayPause} className={classes.playPause}>
          {isPlaying ? <FaPause fontSize="1rem" /> : <FaPlay fontSize="1rem" />}
        </button>
        <div className={classes.rangeslider}>
          {/* progress bar */}
          <div>
            <input
              type="range"
              className={classes.progressBar}
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
          </div>
          <div className={classes.timeCounters}>
            {/* current time */}
            <div className={classes.time}>{calculateTime(currentTime)}</div>
            {/* duration */}
            <div className={classes.duration}>
              {duration && !isNaN(duration) && calculateTime(duration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videoplayer;
