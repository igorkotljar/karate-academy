import React from "react";
import NavBar from "./NavBar";
import TestAPI from "./TestAPI";
import CatAPI from "./CatAPI";
import DogAPI from "./DogAPI";

function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <CatAPI />
        </div>
        <DogAPI />
      </div>
    </div>
  );
}

export default Home;
