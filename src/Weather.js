import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.main.temp,
      time: response.data.time,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.condition.description,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2a3foafb9td8f2884233b70e0d8d2700";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather m-4 p-4">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <div className="row gx-2 mb-4">
            <div className="col-9">
              <input
                type="search"
                className="SearchInput form-control"
                placeholder="Enter a City"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                className="SearchButton btn btn-primary w-100"
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
            <div className="col-sm-3">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
              ></img>
              <p className="CurrentTemperature">
                {weatherData.temperature}
                <sup>°F</sup>
              </p>
            </div>
            <div className="col-sm-5 pt-1">
              <p className="WeatherConditions">Saturday 22:15</p>
              <p className="WeatherConditions">{weatherData.description}</p>
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
