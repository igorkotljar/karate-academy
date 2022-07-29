import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function DogAPI() {
  const [message, setMessage, isLoading] = useState("random img?:  ");

  const fetchData = () => {
    fetch(" https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((response) => {
        setMessage(response.message);
      })
      .catch(() => {
        isLoading("ERROR");
      });
  };

  return (
    <div>
      <Grid
        container
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid xs={12}>
          <Button onClick={fetchData} variant="outlined">
            Get image
          </Button>
        </Grid>
        <Grid xs={12}>
          {/* <Avatar src={message} sx={{ width: 250, height: 250 }}/> */}
          <img className="dogImg" src={message} />
        </Grid>
      </Grid>
    </div>
  );
}
export default DogAPI;
