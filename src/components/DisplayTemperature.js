import React, { useState } from "react";

import "../styles/DisplayTemperature.css";

export default function DisplayTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function convertToFahrenheit() {
    return Math.round((props.celcius * 9) / 5 + 32);
  }

  if (unit === "celcius") {
    return (
      <div className="display-temperature">
        {props.celcius}
        <sup>
          °C/
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </sup>{" "}
      </div>
    );
  } else {
    console.log("F");
    return (
      <div className="display-temperature">
        {convertToFahrenheit()}
        <sup>
          <a href="/" onClick={showCelcius}>
            °C
          </a>
          /°F
        </sup>{" "}
      </div>
    );
  }
}
