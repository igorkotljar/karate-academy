import { Avatar, Grid } from "@mui/material";
import React from "react";
import Erik from "../assets/erik.jpg";

function Athlets() {
  return (
    <div className="athlets">
      <Grid container justify="center">
        <Grid
          xs={12}
          style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}
        >
          <h2>What atheletes say</h2>
        </Grid>
        {/* I can actually user it as separate component */}
        <Grid xs={12} lg={4} align="center">
          <Avatar
            alt="Erik Gevorgyan"
            src={Erik}
            sx={{ width: 96, height: 96 }}
          ></Avatar>
          <h4>Erik Gevorgyan</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            egestas est pharetra metus elementum euismod. Donec pulvinar id
            felis sed fringilla. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit."
          </p>
        </Grid>
        <Grid xs={12} lg={4} align="center">
          <Avatar
            alt="Erik Gevorgyan"
            src={Erik}
            sx={{ width: 96, height: 96 }}
          ></Avatar>
          <h4>Erik Gevorgyan</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            egestas est pharetra metus elementum euismod. Donec pulvinar id
            felis sed fringilla. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit."
          </p>
        </Grid>
        <Grid xs={12} lg={4} align="center">
          <Avatar
            alt="Erik Gevorgyan"
            src={Erik}
            sx={{ width: 96, height: 96 }}
          ></Avatar>
          <h4>Erik Gevorgyan</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            egestas est pharetra metus elementum euismod. Donec pulvinar id
            felis sed fringilla. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit."
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Athlets;
