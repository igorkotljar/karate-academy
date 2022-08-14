import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import bgVideo from "../assets/karate_pirate_video.mp4";
import Welcome from "./Welcome";

function Header() {
  return (
    <div className="mainHeader">
      <Grid container>
        <Grid xs={12}>
          <div className="welcome">
            <video src={bgVideo} autoPlay loop muted />
            <Grid xs={12} md={4}>
              <Welcome />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
