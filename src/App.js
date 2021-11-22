import React from "react";
import Searchbar from "./components/Searchbar";
import CurrentWeather from "./components/CurrentWeather";
import Predictions from "./components/Predictions";

import "./styles/App.css";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Searchbar />
        <br />
        <div className="row">
          <CurrentWeather />
          <Predictions />
        </div>
      </div>
    </div>
  );
}
