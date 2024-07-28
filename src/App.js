import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="mt-3">
          This project was coded by{" "}
          <a
            href="https://github.com/amariedean"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adrianne Dean
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/amariedean/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
