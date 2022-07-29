import React from "react";
import NavBar from "./NavBar";
import TestAPI from "./TestAPI";
import CatAPI from "./CatAPI";
import DogAPI from "./DogAPI";
import { Grid } from "@mui/material";

function Home() {
  return (
    <div>
      <Grid container>
        <Grid xs={12}>
          <NavBar />
        </Grid>
        <Grid xs={12}>
          <CatAPI />
        </Grid>
        <Grid xs={12}>
          <DogAPI />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
