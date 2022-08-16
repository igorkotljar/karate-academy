import { Button } from "@mui/material";
import React from "react";
import Logo from "../styles/img/348s (2).png"

function Welcome() {
  return (
    <div className="welcomeText">
       <img src={Logo} style={{width:200}}/>
      <h1 style={{fontSize: 40}}>"Train with both heart and soul without worrying about theory."</h1>
      <p style={{fontSize: 18, margin: 10}}>- Gichin Funakoshi</p>
      <Button variant="contained" color="error" style={{margin: 10, zIndex: 1}}>
        Learn More 
      </Button>
    </div>
  );
}

export default Welcome;
