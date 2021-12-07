import React, { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import Predictions from "./components/Predictions";
import CurrentWeather from "./components/CurrentWeather";
import axios from "axios";

import "./styles/App.css";

export default function App() {
  const [city, setCity] = useState("New York");
  const [currentWeather, setCurrentWeather] = useState({ ready: false });

  function getWeatherInfo(response) {
    console.log(response.data);

    setCurrentWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      coords: response.data.coord,
    });
  }

  useEffect(() => {
    console.log("running axios");
    let apiKey = "8592322f23646cdf44bbdae2ec743ec1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios(apiUrl).then(getWeatherInfo);
  }, [city]);

  if (currentWeather.ready) {
    return (
      <div className="page">
        <div className="app">
          <div className="container">
            <Searchbar searchCity={(city) => setCity(city)} />
            <br />
            <div className="row">
              <CurrentWeather cityName={city} weather={currentWeather} />
              <Predictions coords={currentWeather.coords} />
            </div>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/Kim-Murray/React-Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Kim Murray
        </footer>
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
}
