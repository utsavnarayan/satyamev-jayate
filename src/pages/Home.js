import React, { Component } from "react";
import Button from "@mui/material/Button";
import logo from "../static/national-emblem.png";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button
            variant="contained"
            size="large"
            href="/register"
            style={{
              fontSize: "3rem"
            }}
          >
            Register
          </Button>
        </header>
      </div>
    );
  }
}

export default Home;
