import React from "react";

import "../styles/PredictionDay.css";

export default function PredictionsDay(props) {
  return (
    <div className="predictions-day">
      <div className="col prediction">
        <h2 className="future-day">{props.day}</h2>
        <img
          className="prediction-icon"
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="Weather icon"
        />
        <h4>
          <span className="min-temp">{props.minT}°C/</span>
          {props.maxT}°C
        </h4>
      </div>
    </div>
  );
}
