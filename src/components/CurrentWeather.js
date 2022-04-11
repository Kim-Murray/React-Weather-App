import React from "react";
import CurrentDate from "./CurrentDate";
import Icon from "./Icon";

import "../styles/CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="col-4 d-flex justify-content-center current-weather">
      <div className=" card border-0" style={{ width: "14rem" }}>
        <div className="card-body today-card">
          <div className="card-title card-title-top">
            <h1>{props.weather.name}</h1>
            <h2>
              Last updated:
              <span id="current-day-time">
                <CurrentDate currentDate={props.weather.date} />
              </span>
            </h2>
          </div>
          <div className="today-T-text">
            <div className="today-T" id="current-T">
              {props.weather.temperature}°C
            </div>
            <span className="text-capitalize" id="description">
              {props.weather.description}
            </span>
          </div>
          <Icon
            code={props.weather.icon}
            temp={props.weather.temperature}
            description={props.weather.description}
            type="today-icon"
          />
          <div className="humidity-wind">
            Wind: {props.weather.wind} m/s
            <br />
            Humidity: {props.weather.humidity}%
          </div>
        </div>
      </div>
    </div>
  );
}
