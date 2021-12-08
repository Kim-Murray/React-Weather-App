import React from "react";

import "../styles/Icon.css";

export default function Icon(props) {
  function findColor(temp) {
    if (temp >= 20) {
      return "warm";
    } else if (temp < 20 && temp > 10) {
      return "mild";
    } else {
      return "cold";
    }
  }

  return (
    <div className={`icon ${props.type}`}>
      <img
        className={`prediction-icon ${findColor(props.temp)}`}
        src={`http://openweathermap.org/img/wn/${props.code}@2x.png`}
        alt="Weather icon"
      />
    </div>
  );
}
