import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo" style={{ marginRight: 70 }}>
          <h4 className="topLogo">GEVORGYAN</h4>
          <h2 className="botLogo">Karate Academy</h2>
        </div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <Link to="/">
              <Button variant="text" style={{ color: "white" }} size="large">
                HOME
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button variant="text" style={{ color: "white" }} size="large">
                ABOUT
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <Button variant="text" style={{ color: "white" }} size="large">
                GALLERY
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Button variant="text" style={{ color: "white" }} size="large">
                CONTACTS
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button variant="contained" style={{backgroundColor: "#5fc7ae"}} size="large">
                EVENTS
              </Button>
            </Link>
          </li>
        </ul>
        <i
          onClick={() => setOpen(!open)}
          className="fa-solid fa-bars burger"
        ></i>
      </nav>
    </div>
  );
}

export default NavBar;
