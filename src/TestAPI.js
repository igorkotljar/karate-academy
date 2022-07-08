import React from "react";
import { useState } from "react";

export default function TestAPI() {
  const [statusMessage, setStatusMessage] = useState("Check wheater status?");

  const fetchData = () => {
    fetch("https://api.weather.gov/")
      .then((response) => response.json())
      .then((response) => {
        setStatusMessage(response.status);
      })
      .catch(() => {
        setStatusMessage("ERROR");
      });
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div>API Status: {statusMessage}</div>
        <button onClick={fetchData}>Check Status</button>
      </div>
    </div>
  );
}
