import React from "react";
import Searchbar from "./components/Searchbar";
import Predictions from "./components/Predictions";
import CurrentWeather from "./components/CurrentWeather";

import "./styles/App.css";

export default function App() {
  return (
    <div className="page">
      <div className="app">
        <div className="container">
          <Searchbar />
          <br />
          <div className="row">
            <CurrentWeather cityName="New York" />
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
