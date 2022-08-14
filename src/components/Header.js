import React from "react";
import { Grid } from "@mui/material";
import bgVideo from "../assets/karate_pirate_video.mp4";
import Welcome from "./Welcome";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <div className="mainHeader">
      <Grid container>
        <Grid xs={12}>
          <div className="welcome">
            <Grid xs={12}>
            <SocialLinks/>
            </Grid>
            <video src={bgVideo} autoPlay loop muted />
            <Grid xs={12} md={5} lg={5}>
              <Welcome />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
