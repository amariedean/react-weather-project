import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay pt-2 pb-2">
      <p className="WeekDay">{day()}</p>
      <img
        className="forecastIcon"
        id="forecastIcon"
        src={props.data.condition.icon_url}
        alt={props.description}
      />
      <p className="High">{maxTemperature()}</p>
      <p className="Low">{minTemperature()}</p>
    </div>
  );
}
