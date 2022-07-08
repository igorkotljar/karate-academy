import React from "react";
import { useState } from "react";

function DogAPI() {
  const [message, setMessage] = useState("random img?:  ");

  const fetchData = () => {
    fetch(" https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((response) => {
        setMessage(response.message);
      })
      .catch(() => {
        setMessage("ERROR");
      });
  };

  return (
    <div>
      <div className="wrapper">
        <div >
          <img className="dogImg" src={message} />
        </div>
        <button onClick={fetchData}>Get Image</button>
      </div>
    </div>
  );
}
export default DogAPI;
