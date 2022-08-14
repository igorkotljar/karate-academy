import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import bgVideo from "../assets/karate_pirate_video.mp4";

function Header() {
  return (
    <div className="mainHeader">
      <div className="overlay"></div>
      <video src={bgVideo} autoPlay loop muted />
      <Grid container>
        <Grid xs={12}>
          <div className="welcome">
            <h2>Welcome</h2>
            <p>to my site</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
