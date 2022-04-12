import React, { useState } from "react";

import "../styles/Searchbar.css";

export default function Searchbar(props) {
  const [city, setCity] = useState(props.defaultCity);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.searchCity(city);
  }

  function getCoords(position) {
    props.searchLocal(position.coords);
  }

  function getLocalWeather() {
    navigator.geolocation.getCurrentPosition(getCoords);
  }

  return (
    <div className="searchbar">
      <form id="search-city" onSubmit={handleSubmit}>
        <div className="searchbar-form">
          <input
            type="text"
            placeholder="Enter a location... (eg Paris)"
            className="searchbar-input-text"
            id="location"
            autoComplete="off"
            onChange={updateCity}
          />

          <div className="searchbar-btns-smallscreen">
            <button className="searchbar-btn searchbar-btn-submit">
              Search
            </button>

            <button
              className="searchbar-btn searchbar-btn-local"
              id="local-weather"
              onClick={getLocalWeather}
            >
              Local
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
