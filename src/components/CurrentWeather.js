import React from "react";

import "../styles/CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="col-4 d-flex justify-content-center current-weather">
      <div className="card border-0" style={{ width: "14rem" }}>
        <div className="card-body today-card">
          <h3 className="card-title card-title-top">
            <h1>London</h1>
            <h2>
              Last updated:
              <span id="current-day-time">Monday 16:12</span>
            </h2>
          </h3>
          <div className="today-T-text">
            <div className="today-T" id="current-T">
              20°C
            </div>
            <span id="description">Sunny!</span>
          </div>
          <img
            id="today-icon"
            className="today-icon"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Weather icon"
          />
          <div className="humidity-wind">
            Wind: 3 m/s
            <br />
            Humidity: 86%
          </div>
        </div>
      </div>
    </div>
  );
}
