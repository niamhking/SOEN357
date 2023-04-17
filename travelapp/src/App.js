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
import Diary from "./Components/Diary/Diary";

import Japan from "./Components/UserConnection_Timeline/japan";
import Journaling from "./Components/Diary/Journaling";
import PreviousJournaling from "./Components/Diary/PreviousJournaling";

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
          path="/diary"
          element={
            <>
              <BackgroundPlane /> 
              <Diary/>
            </>
          }
        />{" "}
        
        <Route
          path="/journaling"
          element={
            <>
              <BackgroundPlane /> 
              <Journaling/>
            </>
          }
        />{" "}

        <Route
          path="/previousJournaling"
          element={
            <>
              <BackgroundPlane /> 
              <PreviousJournaling/>
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
