import React, { useState, useEffect } from "react";
import PredictionDay from "../components/PredictionDay";
import axios from "axios";

import "../styles/Predictions.css";

export default function Predictions(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  const latitude = props.coords.lat;
  const longitude = props.coords.lon;

  function getForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    let apiKey = "8592322f23646cdf44bbdae2ec743ec1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    axios.get(`${apiUrl}`).then(getForecast);
  }, [longitude, latitude]);

  if (loaded) {
    return (
      <div className="predictions">
        <div className="prediction-wrapper" id="forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div key={index}>
                  <PredictionDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
