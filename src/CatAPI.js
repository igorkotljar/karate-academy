import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { styled } from '@mui/material/styles';

function CatAPI() {
  // const [fact, setFact] = useState(" Im showing random facts about cats ");
  // const [length, setLength] = useState(" I am going to show string length ");

  const [cat, setCat, isLoading] = useState({fact: '', length: 0});

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  const fetchData = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((response) => {
        setCat(response);
        // setLength(response.length);
      })
      .catch(() => {
        isLoading("ERROR");
      });
  };

  return (
    <div>
      <div className="wrapper">
        <div className="CatApi">
          <Button onClick={fetchData} variant="outlined">Go</Button>
          <p>
            <b>{cat.length}</b>
          </p>
          <Div>{cat.fact}</Div>
        </div>
      </div>
    </div>
  );
}

export default CatAPI;
