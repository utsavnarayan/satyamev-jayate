import React, { Component } from "react";
import sdtiwari from "../static/sdtiwari.jpg";
import "./Home.css";
import { Avatar, Typography } from "@mui/material";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Avatar
            src={sdtiwari}
            sx={{ width: "15rem", height: "15rem", marginBottom: "1rem" }}
          />
          <Typography container="h4" variant="h4" color="#333333">
            Dr. Shyam Dhar Tiwari
          </Typography>
          <Typography container="h5" variant="h5" color="#333333">
            Deputy Commissioner
          </Typography>
          <Typography container="h5" variant="h5" color="#333333">
            Commercial Tax, Gorakhpur
          </Typography>
        </header>
      </div>
    );
  }
}

export default Home;
