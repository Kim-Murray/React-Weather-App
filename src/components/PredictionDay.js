import React from "react";

import "../styles/PredictionDay.css";

export default function PredictionsDay(props) {
  console.log(`This is the data ${props.data}`);

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

  function minTemperature() {
    return Math.round(props.data.temp.min);
  }

  function maxTemperature() {
    return Math.round(props.data.temp.max);
  }

  return (
    <div className="predictions-day">
      <div className="col prediction">
        <h2 className="future-day">{getDay()}</h2>
        <img
          className="prediction-icon"
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
        <h4>
          <span className="min-temp">{minTemperature()}°C/</span>
          {maxTemperature()}°C
        </h4>
      </div>
    </div>
  );
}
