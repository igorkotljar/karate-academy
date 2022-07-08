import React from "react";
import { useState } from "react";

function CatAPI() {
  const [fact, setFact] = useState("Click to get a fun fact about cats LOL: ");

  const fetchData = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((response) => {
        setFact(response.fact);
      })
      .catch(() => {
        setFact("ERROR");
      });
  };

  return (
    <div>
      <div className="wrapper">
        <div>{fact}</div>
        <button onClick={fetchData}>GO</button>
      </div>
    </div>
  );
}

export default CatAPI;
