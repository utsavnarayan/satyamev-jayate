import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Members from "./pages/Members";
import Team from "./pages/Team";

const sections = [
  { title: "Register", url: "/register" },
  { title: "Members", url: "/members" },
  { title: "Team", url: "/team" },
];

class App extends Component {
  render() {
    return (
      <div>
        <Header title={"सत्यमेव जयते"} sections={sections} />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="members" element={<Members />} />
          <Route path="team" element={<Team />} />
        </Routes>
      </div>
    );
  }
}

export default App;
