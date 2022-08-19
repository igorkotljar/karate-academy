import React from "react";
import NavBar from "../components/NavBar";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import WhyUs from "../components/WhyUs";

function Home() {
  return (
    <div>
      <Grid container>
        <Grid xs={12}>
          <Header />
          <WhyUs/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
