import React, { Component } from "react";
import "./App.css";
import Moodboard from "./Components/Moodboard/Home";
import Activities from "./Components/Activities/Activities";
import Support from "./Components/Chat/ChatBot";
// import plane from "./planeBackground.png";
import Recommendations from "./Components/Recommendations/Recommendations";
import UserConnection from "./Components/UserConnection_Timeline/UserConnection";
import BackgroundPlane from "./Components/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EiffelTower from "./Components/Recommendations/EiffelTower";
import LouvreMuseum from "./Components/Recommendations/LouvreMuseum";
import ArcdeTriomphe from "./Components/Recommendations/ArcdeTriomphe";
import Cath from "./Components/Recommendations/Cath";
import Luxembourg from "./Components/Recommendations/Luxembourg";
import Paris from "./Components/UserConnection_Timeline/paris";

import Croatia from "./Components/UserConnection_Timeline/croatia";
import Rome from "./Components/UserConnection_Timeline/rome";

import Peru from "./Components/UserConnection_Timeline/peru";

import Mexico from "./Components/UserConnection_Timeline/mexico";

import Barcelona from "./Components/UserConnection_Timeline/barcelona";

import Japan from "./Components/UserConnection_Timeline/japan";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import AuthDetails from "./Components/AuthDetails";

import PreviousJournaling from "./Components/Diary/PreviousJournaling";

import Journaling from "./Components/Diary/Journaling";

// import Croatia from "./Components/UserConnection_Timeline/croatia";
import ChatBox from "./Components/Chat/ChatBot";

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
      <div className="App">
        <BackgroundPlane />
        <Routes>
          {" "}
          {/* Route for Support component */}{" "}
          <Route
            path="/ChatBot"
            element={
              <>
                <BackgroundPlane /> <Support />
              </>
            }
          />{" "}
          <Route
            path="/signin"
            element={
              <>
                <SignIn />
              </>
            }
          />{" "}
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />{" "}
          <Route
            path="/"
            element={
              <>
                <BackgroundPlane /> <Moodboard />
              </>
            }
          />{" "}
          <Route
            path="/diary"
            element={
              <>
                <BackgroundPlane /> <Journaling />
              </>
            }
          />{" "}
          <Route
            path="/activities"
            element={
              <>
                <BackgroundPlane /> <Activities />
              </>
            }
          />{" "}
          <Route
            path="/moodboard"
            element={
              <>
                <BackgroundPlane /> <Moodboard />
              </>
            }
          />{" "}
          <Route
            path="/timeline"
            element={
              <>
                <UserConnection />
              </>
            }
          />{" "}
          <Route
            path="/recommendations"
            element={
              <>
                <BackgroundPlane /> <Recommendations />
              </>
            }
          />{" "}
          <Route
            path="/paris"
            element={
              <>
                <Paris />
              </>
            }
          />{" "}
          <Route
            path="/triptoparis-eiffeltower"
            element={
              <>
                <BackgroundPlane /> <EiffelTower />
              </>
            }
          />{" "}
          <Route
            path="/croatia"
            element={
              <>
                <Croatia />
              </>
            }
          />{" "}
          <Route
            path="/triptoparis-louvremuseum"
            element={
              <>
                <BackgroundPlane /> <LouvreMuseum />
              </>
            }
          />{" "}
          <Route
            path="/barcelona"
            element={
              <>
                <Barcelona />
              </>
            }
          />{" "}
          <Route
            path="/triptoparis-arcdetriomphe"
            element={
              <>
                <BackgroundPlane /> <ArcdeTriomphe />
              </>
            }
          />{" "}
          <Route
            path="/mexico"
            element={
              <>
                <Mexico />
              </>
            }
          />{" "}
          <Route
            path="/triptoparis-cathedral"
            element={
              <>
                <BackgroundPlane /> <Cath />
              </>
            }
          />{" "}
          <Route
            path="/japan"
            element={
              <>
                <Japan />
              </>
            }
          />{" "}
          <Route
            path="/triptoparis-luxembourg"
            element={
              <>
                <BackgroundPlane /> <Luxembourg />
              </>
            }
          />{" "}
          <Route
            path="/rome"
            element={
              <>
                <Rome />
              </>
            }
          />{" "}
          <Route
            path="/peru"
            element={
              <>
                <Peru />
              </>
            }
          />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
};

export default App;
