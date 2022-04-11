import React from "react";
import Icon from "./Icon";

import "../styles/PredictionDay.css";

export default function PredictionsDay(props) {
  function getDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function icon() {
    return props.data.weather[0].icon;
  }

  function minTemperature() {
    return Math.round(props.data.temp.min);
  }

  function maxTemperature() {
    return Math.round(props.data.temp.max);
  }

  return (
    <div className="predictions-day">
      <div className="prediction">
        <h2 className="future-day">{getDay()}</h2>
        <Icon
          code={icon()}
          temp={maxTemperature()}
          discription="weather icon"
          type={"prediction-icon"}
          className="prediction-icon"
        />
        <h4>
          <span className="min-temp">{minTemperature()}°C/</span>
          {maxTemperature()}°C
        </h4>
      </div>
    </div>
  );
}
