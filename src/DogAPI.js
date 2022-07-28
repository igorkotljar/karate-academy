import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

function DogAPI() {
  const [message, setMessage] = useState("random img?:  ");
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    padding: theme.spacing(1),
  }));

  const fetchData = () => {
    fetch(" https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((response) => {
        setMessage(response.message);
      })
      .catch(() => {
        setMessage("ERROR");
      });
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stack>
          <Item>
            <Button onClick={fetchData} variant="outlined">
              Get image
            </Button>
          </Item>
          <Item>
            <img className="dogImg" src={message} />
          </Item>
        </Stack>
      </Box>
    </div>
  );
}
export default DogAPI;
