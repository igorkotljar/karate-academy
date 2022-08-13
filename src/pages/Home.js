import React from "react";
import NavBar from "../components/NavBar";
import CatAPI from "../API/CatAPI";
import DogAPI from "../API/DogAPI";
import { Grid } from "@mui/material";
import MyTestState from "../components/MyTestState";

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
        <Grid xs={12}>
         <MyTestState />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
