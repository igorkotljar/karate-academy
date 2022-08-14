import React from "react";
import NavBar from "../components/NavBar";
import { Grid } from "@mui/material";
import Header from "../components/Header";

function Home() {


  return (
    <div>
      <Grid container>
        <Grid xs={12}>
          <NavBar />
        </Grid>
        <Grid xs={12}>
          <Header/>
          
        </Grid>   
      </Grid>
    </div>
  );
}

export default Home;
