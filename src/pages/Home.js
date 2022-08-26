import React from "react";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import WhyUs from "../components/WhyUs";
import Intro from "../components/Intro";
import Athlets from "../components/Athlets";

function Home() {
  return (
    <div>
      <Grid container >
        <Grid xs={12} md={12} lg={12}>
          <Header />
        </Grid>
        <Grid xs={12} md={12} lg={12}>
        <WhyUs/>
        
        </Grid>
        <Grid xs={12}>
        <Intro/>
        </Grid>
        <Grid xs={12}>
          <Athlets/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
