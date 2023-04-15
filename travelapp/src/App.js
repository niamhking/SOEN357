import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
// import plane from "./planeBackground.png";
import UserConnection from "./Components/UserConnection_Timeline/UserConnection";
import BackgroundPlane from "./Components/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Paris from "./Components/UserConnection_Timeline/paris";

import Croatia from "./Components/UserConnection_Timeline/croatia";
import Rome from "./Components/UserConnection_Timeline/rome";

import Peru from "./Components/UserConnection_Timeline/peru";

import Mexico from "./Components/UserConnection_Timeline/mexico";

import Barcelona from "./Components/UserConnection_Timeline/barcelona";

import Japan from "./Components/UserConnection_Timeline/japan";

// import Croatia from "./Components/UserConnection_Timeline/croatia";

const App = () => {
  return (
    // <Router>
    //   <div
    //     className="colourBackground"
    //     style={{
    //       backgroundImage: `url(${plane})`,
    //       backgroundRepeat: "no-repeat",
    //     }}
    //   >
    //     <Routes>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>{" "}
    //       <Route path="/timeline">
    //         <UserConnection />
    //       </Route>{" "}
    //     </Routes>{" "}
    //   </div>{" "}
    // </Router>

    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BackgroundPlane /> <Home />
            </>
          }
        />{" "}
        <Route
          path="/timeline"
          element={
            <>
              <BackgroundPlane /> <UserConnection />
            </>
          }
        />{" "}
        <Route
          path="/paris"
          element={
            <>
              <BackgroundPlane /> <Paris />
            </>
          }
        />{" "}
        <Route
          path="/croatia"
          element={
            <>
              <BackgroundPlane /> <Croatia />
            </>
          }
        />{" "}
        <Route
          path="/barcelona"
          element={
            <>
              <BackgroundPlane /> <Barcelona />
            </>
          }
        />{" "}
        <Route
          path="/mexico"
          element={
            <>
              <BackgroundPlane /> <Mexico />
            </>
          }
        />{" "}
        <Route
          path="/japan"
          element={
            <>
              <BackgroundPlane /> <Japan />
            </>
          }
        />{" "}
        <Route
          path="/rome"
          element={
            <>
              <BackgroundPlane /> <Rome />
            </>
          }
        />{" "}
        <Route
          path="/peru"
          element={
            <>
              <BackgroundPlane /> <Peru />
            </>
          }
        />{" "}
      </Routes>{" "}
    </Router>
  );
};
export default App;
