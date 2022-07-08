import React from "react";
import { useState } from "react";

function CatAPI() {
  const [fact, setFact] = useState(" Im showing random facts about cats ");
  const [length, setLength] = useState(" I am going to show string length ");

  const fetchData = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((response) => {
        setFact(response.fact);
        setLength(response.length);
      })
      .catch(() => {
        setFact("ERROR");
      });
  };

  return (
    <div>
      <div className="wrapper">
        <div className="CatApi">
          <button onClick={fetchData} className="btn">Go</button>
          <p>
            <b>{length}</b>
          </p>
          <p>{fact}</p>
        </div>
      </div>
    </div>
  );
}

export default CatAPI;
