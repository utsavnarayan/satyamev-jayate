import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Members from "./pages/Members";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import Activities from "./pages/Activities";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";

const sections = [
  // { title: "Register", url: "/register" },
  // { title: "Members", url: "/members" },
  { title: "About", url: "/about" },
  { title: "Activities", url: "/activities" },
  { title: "Contribute", url: "/contribute" },
  { title: "Team", url: "/team" },
];

class App extends Component {
  render() {
    return (
      <div>
        {/* <ResponsiveAppBar/> */}
        <Header title={"सत्यमेव जयते"} sections={sections} />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="members" element={<Members />} />
          <Route path="team" element={<Team />} />
          <Route path="about" element={<About />} />
          <Route path="activities" element={<Activities />} />
          <Route path="contribute" element={<Contribute />} />
          <Route path="gallery" element={<Gallery />} />
          Activities
        </Routes>
      </div>
    );
  }
}

export default App;
