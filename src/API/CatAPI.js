import { Button, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";

function CatAPI() {
  // const [fact, setFact] = useState(" Im showing random facts about cats ");
  // const [length, setLength] = useState(" I am going to show string length ");

  const [cat, setCat, isLoading] = useState({ fact: "", length: "" });

  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  const fetchData = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((response) => {
        setCat(response);
      })
      .catch(() => {
        isLoading("ERROR");
      });
  };

  return (
    <div >
      <Grid className="catDiv"
        container
        spacing={0}
        textAlign="center"
        // alignItems="center"
        // justifyContent="center"
      >
        <Grid item xs={12}>
          <Button onClick={fetchData} variant="outlined">
            Go  
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Div>Text Length: </Div>
          <Div>{cat.length}</Div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Div>{cat.fact}</Div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CatAPI;
