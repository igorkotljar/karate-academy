import React from "react";
import NavBar from "../components/NavBar";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import WhyUs from "../components/WhyUs";
import Intro from "../components/Intro";

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
      </Grid>
    </div>
  );
}

export default Home;
