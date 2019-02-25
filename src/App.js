import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/NavBar";

import desktopImage from "./purple-desktop.jpg";
import mobileImage from "./clouds-desktop.jpg";

class App extends Component {
  render() {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
          <NavBar />
      </div>
    );
  }
}

export default App;
