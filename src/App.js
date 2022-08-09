import "./styles/App.css";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Services from "./pages/Services";


function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
