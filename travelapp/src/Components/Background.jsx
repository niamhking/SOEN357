import React from "react";
import plane from "../../src/planeBackground.png";

function BackgroundPlane() {
  return (
    <div
      style={{
        backgroundImage: `url(${plane}), linear-gradient(180deg, #02192d 0%, #0f415e 71.04%, #1c5b6b 89.89%, #176770 97.89%, #127475 100%)`,
        backgroundSize: "cover, 30%",
        backgroundPosition: "center, center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}

export default BackgroundPlane;
