import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  function search() {
    const apiKey = "2a3foafb9td8f2884233b70e0d8d2700";
    let city = "Miami";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Search mt-2 mb-4">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="SearchInput form-control"
                placeholder="Enter a City"
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                className="SearchButton btn w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="Weather mt-4 p-4">
          <div className="container">
            <div className="WeatherInfo row align-items-center">
              <div className="col-sm-4">
                <h1 className="CityName">Miami</h1>
              </div>
              <div className="col-sm-3">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="partly cloudy"
                ></img>
              </div>
              <div className="col-sm-5 pt-1">
                <p className="WeatherConditions">{temperature}</p>
                <p className="WeatherConditions">Saturday 22:15</p>
                <p className="WeatherConditions">partly cloudy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
