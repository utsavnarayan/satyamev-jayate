import React, { Component } from "react";
import sdtiwari from "../static/sdtiwari.jpg";
import "./Home.css";
import { Avatar, Typography } from "@mui/material";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="Centerd-body">
          <Avatar
            src={sdtiwari}
            sx={{ width: "10rem", height: "10rem", marginBottom: "1rem" }}
          />
          <Typography variant="h5">
            Dr. Satyamev Jayate Bharat Lokmangal (Shyam Dhar Tiwari)
          </Typography>
          <Typography variant="h6">Deputy Commissioner, Commercial Tax, Gorakhpur</Typography>
        </header>
      </div>
    );
  }
}

export default Home;
