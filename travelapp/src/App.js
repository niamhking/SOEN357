import React, { Component } from "react";
import "./App.css";
import Moodboard from "./Components/Moodboard/Home";
import Support from "./Components/Chat/ChatBot";
import Home from "./Components/Home/Home";
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

// import Croatia from "./Components/UserConnection_Timeline/croatia";
import ChatBox from './Components/Chat/ChatBot'


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
         {/* Route for Support component */}
         <Route path="/ChatBot" 
        element={
          <>
            <BackgroundPlane /> <Support />
          </>
        }
         
         />

        <Route
          path="/"
          element={
            <>
              <BackgroundPlane /> <Moodboard />
            </>
          }
        />
       
        <Route
          path="/timeline"
          element={
            <>
              <BackgroundPlane /> <UserConnection />
            </>
          }
        />{" "}
        <Route
          path="/recommendations"
          element={
            <>
              <BackgroundPlane /> <Recommendations />
              </>}
              />
              <Route
          path="/paris"
          element={
            <>
              <BackgroundPlane /> <Paris />
            </>
          }/>
        {" "}
        <Route
          path="/triptoparis-eiffeltower"
          element={
            <>
              <BackgroundPlane /> <EiffelTower />
              </>}/>
              <Route
          path="/croatia"
          element={
            <>
              <BackgroundPlane /> <Croatia />
            </>
          }
        />{" "}
        <Route
          path="/triptoparis-louvremuseum"
          element={
            <>
              <BackgroundPlane /> <LouvreMuseum />
              </>}/>
              <Route
          path="/barcelona"
          element={
            <>
              <BackgroundPlane /> <Barcelona />
            </>
          }
        />{" "}
        <Route
          path="/triptoparis-arcdetriomphe"
          element={
            <>
              <BackgroundPlane /> <ArcdeTriomphe />
              </>}/>
              <Route
          path="/mexico"
          element={
            <>
              <BackgroundPlane /> <Mexico />
            </>
          }
        />{" "}
        <Route
          path="/triptoparis-cathedral"
          element={
            <>
              <BackgroundPlane /> <Cath />
              </>}/>
<Route
          path="/japan"
          element={
            <>
              <BackgroundPlane /> <Japan />
            </>
          }
        />{" "}
        <Route
          path="/triptoparis-luxembourg"
          element={
            <>
              <BackgroundPlane /> <Luxembourg />
              </>}/>
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
