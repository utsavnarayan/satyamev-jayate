import React, { Component } from "react"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
     </div>
    )
  }
}

export default App
