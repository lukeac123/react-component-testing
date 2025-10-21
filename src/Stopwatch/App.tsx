import { useState, useCallback, useRef } from "react";
import "./index.css";

export function StopWatch() {
  const [seconds, setSeconds] = useState(55);
  const [timerActive, setTimerActive] = useState(false);
  const intervalId = useRef(null);

  const handleTimerActive = useCallback(
    (timerActive) => {
      if (!timerActive) {
        clearInterval(intervalId.current);
        intervalId.current = null;
        return;
      }

      if (intervalId.current) return;

      intervalId.current = setInterval(
        () => setSeconds((prev) => prev + 1),
        1000
      );
    },
    [timerActive, intervalId]
  );

  const handleStart = () => {
    setTimerActive(true);
    handleTimerActive(true);
  };

  const handleStop = () => {
    setTimerActive(false);
    handleTimerActive(false);
  };

  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;
  console.log(newSeconds);

  return (
    <div>
      {seconds > 60 ? (
        <span>
          {minutes}&nbsp;minutes&nbsp;&nbsp;{newSeconds}&nbsp;seconds
        </span>
      ) : (
        <span>{seconds}&nbsp;seconds</span>
      )}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}
