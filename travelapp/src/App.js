import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import plane from "./planeBackground.png";

const App = () => {
  return (
    <div
      classname="colourBackground"
      style={{
        backgroundImage: `url(${plane})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Home></Home>
    </div>
  );
};

export default App;
