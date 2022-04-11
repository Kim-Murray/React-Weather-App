import React from "react";
import CurrentDate from "./CurrentDate";
import Icon from "./Icon";

import "../styles/CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="current-weather">
      <div className="current-weather-horizontal">
        <div className="current-weather-horizontal-city">
          <h1 className="current-weather-city">{props.weather.name}</h1>
          <h2>
            Last updated:
            <span id="current-day-time">
              <CurrentDate currentDate={props.weather.date} />
            </span>
          </h2>

          <div className="today-T-text">
            <div className="today-T" id="current-T">
              {props.weather.temperature}°C
            </div>
          </div>

          <span className="description" id="description">
            {props.weather.description}
          </span>
        </div>
        <div className="current-weather-horizontal-icon">
          <Icon
            code={props.weather.icon}
            temp={props.weather.temperature}
            description={props.weather.description}
            type="today-icon"
            className="today-icon"
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
