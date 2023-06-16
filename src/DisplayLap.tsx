import React from "react";

// Define the type for the props that the component receives
type DisplayLapProps = {
  laps: number[];
};

export default function DisplayLap(props: DisplayLapProps) {
  return (
    <ul>
      {/* Map through the laps array and render each lap time */}
      {props.laps.map((lap, index) => (
        <li key={index}>{lap / 1000} seconds</li>
      ))}
    </ul>
  );
}
