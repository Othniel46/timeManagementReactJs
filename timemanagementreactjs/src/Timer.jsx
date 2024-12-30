import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(1500); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [alarm, setAlarm] = useState(new Audio("/sounds/alarm.mp3"));

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (time === 0) {
      alarm.play();
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, alarm]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="timer">
      <h2>Timer</h2>
      <div className="time-display">{formatTime(time)}</div>
      <div className="controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={() => setTime(1500)}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;