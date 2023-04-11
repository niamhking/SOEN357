import React, { Component } from "react";
import "./App.css";
import Moodboard from "./Components/Moodboard/Home";
import Activities from "./Components/Activities/Activities";
import plane from "./fullBackground.png";

class App extends Component {
  render() {
    return (
      <div
        classname="colourBackground"
        style={{
          backgroundImage: `url(${plane})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Moodboard></Moodboard>
      </div>
    );
  }
}

export default App;
