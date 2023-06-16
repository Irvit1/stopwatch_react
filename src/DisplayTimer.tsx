import React from "react";

// Define the type for the props that the component receives
type DisplayTimerProps = {
  time: number;
};

export default function DisplayTimer(props: DisplayTimerProps) {
  // Function to pad a given number with leading zeros
  const padTime = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  const formatTime = (time: number): string => {
    // Calculate the milliseconds, seconds, minutes, and hours from the given time
    const millisecond = Math.floor((time % 1000) / 10);
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(seconds / 60) % 60;
    const hours = Math.floor(minutes / 60);

    return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}.${padTime(
      millisecond
    )}`;
  };

  return <div>{formatTime(props.time)}</div>;
}
