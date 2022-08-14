import Instagram from "@mui/icons-material/Instagram";
import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";

function SocialLinks() {
  return (
    <div style={{ textAlign: "right", paddingRight: 30, paddingTop: 10 }}>
      <a
        target="_blank"
        href="https://www.instagram.com/gevorgyan_karate_academy/"
      >
        <Instagram
          color="secondary"
          fontSize="large"
          style={{ color: "#C8268C" }}
        />
      </a>
      <a target="_blank" href="#">
        <Facebook color="primary" fontSize="large" />
      </a>
      <a target="_blank" href="#">
        <YouTube color="error" fontSize="large" />
      </a>
    </div>
  );
}

export default SocialLinks;
