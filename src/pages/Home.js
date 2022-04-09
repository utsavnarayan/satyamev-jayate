import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            component={Link}
            variant="contained"
            size="large"
            to="/register"
            style={{
              fontSize: "3rem",
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
