import React from "react";
import NavBar from "./NavBar";
import TestAPI from "./TestAPI";
import CatAPI from "./CatAPI";
import DogAPI from "./DogAPI";

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home, Service and Contact pages available (lol) only</h1>
      <p></p>
      <div>
        <div>
          <TestAPI />
        </div>
        <div>
          <CatAPI />
        </div>
        <DogAPI />
      </div>
    </div>
  );
}

export default Home;
