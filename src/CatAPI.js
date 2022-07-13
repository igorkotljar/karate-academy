import React from "react";
import { useState } from "react";

function CatAPI() {
  // const [fact, setFact] = useState(" Im showing random facts about cats ");
  // const [length, setLength] = useState(" I am going to show string length ");

  const [cat, setCat] = useState({fact: '', length: 0});


  const fetchData = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((response) => {
        setCat(response);
        // setLength(response.length);
      })
      .catch(() => {
        setCat("ERROR");
      });
  };

  return (
    <div>
      <div className="wrapper">
        <div className="CatApi">
          <button onClick={fetchData} className="btn">Go</button>
          <p>
            <b>{cat.length}</b>
          </p>
          <p>{cat.fact}</p>
        </div>
      </div>
    </div>
  );
}

export default CatAPI;
