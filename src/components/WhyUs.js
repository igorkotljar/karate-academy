import { Button, Grid } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import champs from "../assets/champions.JPG";

function WhyUs() {
  return (
    <div>
      <Grid container>
        <Grid xs={12} md={6} style={{ padding: 0}}>
          <div className="whyUs-bg"></div>
        </Grid>
        <Grid xs={12} md={6}>
          <div className="whyUs-text">
            <Grid xs={12} md={6}>
              <h2 style={{ textAlign: "center", fontSize: 36}}>WHY CHOOSE US</h2>
            </Grid>
            <Grid xs={12} md={6}>
              <p style={{ marginTop: 15, textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas est pharetra metus elementum euismod. Donec
                pulvinar id felis sed fringilla. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </Grid>
            <Grid xs={12} md={8}>
              <div style={{ marginTop: 40, textAlign: "center" }}>
                <Grid xs={12} md={8} container>
                  <Grid xs={12} md={3}>
                    <h2 style={{ fontSize: 52}}>A</h2>
                  </Grid>
                  <Grid xs={12} md={9}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas egestas est pharetra metus elementum euismod.
                    </p>
                  </Grid>
                </Grid>
                <hr></hr>
              </div>
            </Grid>
            <Grid xs={12} md={8}>
              <div style={{ marginTop: 40, textAlign: "center" }}>
                <Grid xs={12} md={8} container>
                  <Grid xs={12} md={3}>
                    <h2 style={{ fontSize: 52}}>B</h2>
                  </Grid>
                  <Grid xs={12} md={9}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas egestas est pharetra metus elementum euismod.
                    </p>
                  </Grid>
                </Grid>
                <hr></hr>
              </div>
            </Grid>
            <Grid xs={12} md={8}>
              <div style={{ marginTop: 40, textAlign: "center" }}>
                <Grid xs={12} md={8} container>
                  <Grid xs={12} md={3}>
                    <h2 style={{ fontSize: 52}}>C</h2>
                  </Grid>
                  <Grid xs={12} md={9}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas egestas est pharetra metus elementum euismod.
                    </p>
                  </Grid>
                </Grid>
                <hr></hr>
              </div>
            </Grid>
            <Grid xs={12} md={6}>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Button variant="contained" color="success" size="large">
                Learn more about us
              </Button>

            </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default WhyUs;
