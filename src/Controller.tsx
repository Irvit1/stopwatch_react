import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import DisplayTimer from "./DisplayTimer";
import DisplayLap from "./DisplayLap";

export default function Controller() {
  // State variable for timer value
  const [timer, setTimer] = useState(0);

  // State variable for timer running status
  const [, setIsRunning] = useState(false);

  // State variable for start time
  const [startTime, setStartTime] = useState<number>(0);

  // State variable for stop time
  const [, setStopTime] = useState<number>(0);

  // State variable for lap times
  const [laps, setLaps] = useState<number[]>([]);

  // Ref to store the interval ID
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  // Effect to start or stop the timer based on start time
  useEffect(() => {
    if (startTime > 0) {
      timerRef.current = setInterval(() => {
        // Update the timer value as the difference between current time and start time
        setTimer(() => Date.now() - startTime);
      }, 1);
    } else {
      // If start time is 0, stop the timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = undefined;
      }
    }
  }, [startTime]);

  const startTimer = () => {
    // Set the timer running status to true
    setIsRunning(true);
    // Set the start time to the current time
    setStartTime(Date.now());
  };

  const pauseTimer = () => {
    // Set the timer running status to false
    setIsRunning(false);
    setStartTime(0);
    // Set the stop time to the current timer value
    setStopTime(timer);
  };

  const resetTimer = () => {
    // Reset everything to 0
    setIsRunning(false);
    setStartTime(0);
    setStopTime(0);
    setTimer(0);
    // Clear lap times
    setLaps([]);
  };

  const newLap = () => {
    // Set the current timer value as a new lap
    setLaps((prevLaps) => [...prevLaps, timer]);
  };

  return (
    <div>
      <DisplayTimer time={timer} />
      <Button label="Start" onClick={startTimer} />
      <Button label="Pause" onClick={pauseTimer} />
      <Button label="Reset" onClick={resetTimer} />
      <Button label="New Lap" onClick={newLap} />
      <DisplayLap laps={laps} />
    </div>
  );
}
