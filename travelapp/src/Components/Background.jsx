import React from "react";
import plane from "../../src/planeBackground.png";


function BackgroundPlane() {
  return (
    <div
      style={{
        backgroundImage: `url(${plane})`,
        backgroundSize: "30%",
        backgroundSize: "cover",
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

