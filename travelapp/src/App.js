import React from "react";
import "./App.css";
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
import SignIn from "./Components/Authentication/SignIn";

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
    <div className="App">

    <BackgroundPlane />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <SignIn />
            </>
          }
        />
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
              <Recommendations />
              </>}
              />
              <Route
          path="/paris"
          element={
            <>
              <Paris />
            </>
          }/>
        {" "}
        <Route
          path="/triptoparis-eiffeltower"
          element={
            <>
              <EiffelTower />
              </>}/>
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
              <LouvreMuseum />
              </>}/>
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
              <ArcdeTriomphe />
              </>}/>
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
              <Cath />
              </>}/>
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
              <Luxembourg />
              </>}/>
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
      </div>
    </Router>
  );
};
export default App;
