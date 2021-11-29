import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";

import "../styles/CurrentWeather.css";

export default function Test(props) {
  console.log("top");
  const [currentWeather, setCurrentWeather] = useState({ ready: false });
  console.log(`ready at the start: ${currentWeather.ready}`);

  function changeReady(response) {
    console.log(response.data);
    setCurrentWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  useEffect(() => {
    console.log("running axios");
    let apiKey = "8592322f23646cdf44bbdae2ec743ec1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=metric`;

    axios(apiUrl).then(changeReady);
  }, [props.cityName]);

  console.log("checking if statement");

  if (currentWeather.ready) {
    return (
      <div className="col-4 d-flex justify-content-center current-weather">
        <div className="card border-0" style={{ width: "14rem" }}>
          <div className="card-body today-card">
            <div className="card-title card-title-top">
              <h1>{props.cityName}</h1>
              <h2>
                Last updated:
                <span id="current-day-time">
                  <CurrentDate currentDate={currentWeather.date} />
                </span>
              </h2>
            </div>
            <div className="today-T-text">
              <div className="today-T" id="current-T">
                {currentWeather.temperature}°C
              </div>
              <span id="description">{currentWeather.description}</span>
            </div>
            <img
              id="today-icon"
              className="today-icon"
              src={currentWeather.icon}
              alt={currentWeather.description}
            />
            <div className="humidity-wind">
              Wind: {currentWeather.wind} m/s
              <br />
              Humidity: {currentWeather.humidity}%
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
}
