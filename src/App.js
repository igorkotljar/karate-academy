import './App.css';
import Contact from './Contact';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import React from 'react';

function App() {
  return (    
      <div className="App">      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
  );
}

export default App;
