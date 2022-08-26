import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Olympic from "../assets/olympic.JPG";
import Traditional from "../assets/traditional.JPG";

function Intro() {
  return (
    <div className="intro" style={{ marginTop: 20, paddingBottom: 30 }}>
      <Grid container justify="center">
        <Grid xs={12} lg={3} align="center"></Grid>
        <Grid xs={12} lg={3} align="center" style={{ padding: 20 }}>
          <h2>Classes for beginers</h2>
          <Card style={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="180"
              image={Traditional}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "left" }}
              >
                Traditional Karate
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas est pharetra metus elementum euismod. Donec
                pulvinar id felis sed fringilla. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} lg={3} align="center" style={{ padding: 20 }}>
          <h2>Advanced Karate</h2>
          <Card style={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="180"
              image={Olympic}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "left" }}
              >
                Olympic Style
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas est pharetra metus elementum euismod. Donec
                pulvinar id felis sed fringilla. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* <Grid xs={12} lg={9} align="center" style={{paddingTop: 30}}>
          <Card style={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="180"
              image={Traditional}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "left" }}
              >
                Personal Trainings
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas est pharetra metus elementum euismod. Donec
                pulvinar id felis sed fringilla. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Intro;
