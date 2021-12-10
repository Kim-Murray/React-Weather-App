import React, { useState } from "react";

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
    <div className="Searchbar">
      <form id="search-city" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter a location... (eg Paris)"
              className="form-control"
              id="location"
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-2">
            <input type="submit" className="btn btn-success" value="Submit" />
          </div>
          <div className="col-2">
            <button
              className="btn btn-secondary"
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
