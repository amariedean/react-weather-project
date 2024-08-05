import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="WeatherInfo row align-items-center">
        <div className="col-sm-4">
          <h1 className="CityName">{props.data.city}</h1>
          <p className="Current">
            {Math.round(props.data.temperature)}
            <sup>°F</sup>
          </p>
        </div>
        <div className="col-sm-4">
          <img
            className="icon align-items-center"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
        </div>
        <div className="col-sm-4 pt-1">
          <FormattedDate date={props.data.date} />
          <p className="Current text-capitalize">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
