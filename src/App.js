import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import Predictions from "./components/Predictions";
import CurrentWeather from "./components/CurrentWeather";

import "./styles/App.css";

export default function App() {
  const [city, setCity] = useState("New York");

  return (
    <div className="page">
      <div className="app">
        <div className="container">
          <Searchbar searchCity={(city) => setCity(city)} />
          <br />
          <div className="row">
            <CurrentWeather cityName={city} />
            <Predictions />
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
}
