import React, { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import Predictions from "./components/Predictions";
import CurrentWeather from "./components/CurrentWeather";
import axios from "axios";

import "./styles/App.css";

export default function App() {
  const [city, setCity] = useState("London");
  const [location, setLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState({ ready: false });

  function getWeatherInfo(response) {
    setCurrentWeather({
      ready: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      coords: response.data.coord,
    });
  }

  useEffect(() => {
    let apiKey = "8592322f23646cdf44bbdae2ec743ec1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios(apiUrl).then(getWeatherInfo);
  }, [city]);

  useEffect(() => {
    let lat = location.latitude;
    let lon = location.longitude;

    let apiKey = "8592322f23646cdf44bbdae2ec743ec1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=`;
    axios.get(`${apiUrl}${apiKey}`).then(getWeatherInfo);
  }, [location]);

  if (currentWeather.ready) {
    return (
      <div className="page">
        <div className="app">
          <div className="container">
            <Searchbar
              searchCity={(city) => setCity(city)}
              searchLocal={(location) => setLocation(location)}
            />
            <br />
            <div className="weather">
              <div className="weather-current">
                <CurrentWeather weather={currentWeather} />
              </div>
              <div className="weather-predictions">
                <Predictions coords={currentWeather.coords} />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
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
