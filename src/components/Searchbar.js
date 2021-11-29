import React from "react";

export default function Searchbar() {
  return (
    <div className="Searchbar">
      <form id="search-city">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter a location... (eg Paris)"
              className="form-control"
              id="location"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input type="submit" className="btn btn-success" value="Submit" />
          </div>
          <div className="col-2">
            <button className="btn btn-secondary" id="local-weather">
              Local
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
