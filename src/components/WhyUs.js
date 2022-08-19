import { Grid } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import champs from "../assets/champions.JPG";

function WhyUs() {
  return (
    <div>
      <Grid container>
        <Grid xs={12} md={5} style={{ padding: 0, backgroundColor: "red" }}>
          <div className="whyUs-bg"></div>
        </Grid>
        <Grid xs={12} md={7} style={{ textAlign: "center" }}>
          <div className="whyUs-text">
            <h2 style={{ textAlign: "left", fontSize: 36 }}>WHY CHOOSE US</h2>
            <p style={{ marginTop: 15, textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              egestas est pharetra metus elementum euismod. Donec pulvinar id
              felis sed fringilla.
            </p>
            <p style={{ marginTop: 20, textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              egestas est pharetra metus elementum euismod. Donec pulvinar id
              felis sed fringilla. Nulla sit amet ullamcorper dui. Ut quis nibh
              quis libero pharetra ullamcorper pretium in eros. Suspendisse nisl
              quam, eleifend eu nibh sit amet, molestie rhoncus magna. Donec
              maximus finibus augue, quis pretium purus. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Phasellus congue quis
              ipsum a ornare. Duis sollicitudin molestie neque, eget rhoncus
              sapien finibus sed. Vivamus sed nunc ac velit tristique convallis.
              Sed ex tellus, imperdiet eu tincidunt scelerisque, luctus commodo
              justo. Maecenas dignissim lacus id nunc imperdiet congue. Cras id
              ex ac purus tempor pharetra at et diam. Aliquam quis lectus cursus
              ligula gravida cursus a in eros. Vivamus nibh nulla, iaculis sed
              neque eget, varius pulvinar ipsum. Aliquam id lacus fringilla,
              commodo leo id, dapibus massa. Praesent porta faucibus dolor ac
              tristique. Pellentesque bibendum, mauris at vestibulum malesuada,
              felis odio interdum est, nec tempor libero arcu vitae nulla.
              Suspendisse vehicula gravida augue et pretium. Mauris eget
              ultrices sem, sollicitudin malesuada eros. Suspendisse molestie
              convallis mauris, at pellentesque neque iaculis in.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default WhyUs;
