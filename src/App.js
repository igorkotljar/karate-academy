import "./App.css";
import Contact from "./Contact";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import React from "react";
import Services from "./Services";
import TestAPI from "./TestAPI";
import CatAPI from "./CatAPI";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <TestAPI />
        <CatAPI />
      </div>
    </div>
  );
}

export default App;
