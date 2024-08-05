import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState({ ready: false });
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      date: "Sunday 22:15",
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "2a3foafb9td8f2884233b70e0d8d2700";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather m-2 p-4">
        <form>
          <div className="row gx-2 mb-4">
            <div className="col-9">
              <input
                type="input"
                className="SearchInput form-control"
                placeholder="Enter a City"
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                className="btn w-100 SearchButton"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="container">
          <div className="WeatherInfo row align-items-center">
            <div className="col-sm-4">
              <h1 className="CityName">{weatherData.city}</h1>
            </div>
            <div className="col-sm-4">
              <img
                className="icon align-items-center"
                src={weatherData.iconUrl}
                alt={weatherData.description}
              ></img>
              <p className="CurrentTemperature">
                {Math.round(weatherData.temperature)}
                <sup>°F</sup>
              </p>
            </div>
            <div className="col-sm-4 pt-1">
              <p className="WeatherConditions">{weatherData.date}</p>
              <p className="WeatherConditions text-capitalize">
                {weatherData.description}
              </p>
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
