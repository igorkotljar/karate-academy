import React from "react";
import { Grid } from "@mui/material";
import bgVideo from "../assets/karate_pirate_video.mp4";
import bgPhoto from "../assets/bodybg.webp";
import Welcome from "./Welcome";
import SocialLinks from "./SocialLinks";
import NavBar from "../components/NavBar";

function Header() {
  return (
    <div className="mainHeader">
      <Grid container>
        <Grid xs={12}>
          <div className="backgroundImage">
            <Grid xs={12}>
              <NavBar />
            </Grid>
            <Grid xs={12}>
              <div className="grayContainer"></div>
              <div className="welcomeMessage">
                <h4>WE TEACH ALL ASPECTS OF</h4>
                <h2 style={{fontSize:100}}>KARATE</h2>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
