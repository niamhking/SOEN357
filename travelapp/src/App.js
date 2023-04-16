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
          path="/recommendations"
          element={
            <>
              <BackgroundPlane /> <Recommendations />
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
          path="/triptoparis-louvremuseum"
          element={
            <>
              <BackgroundPlane /> <LouvreMuseum />
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
          path="/triptoparis-cathedral"
          element={
            <>
              <BackgroundPlane /> <Cath />
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
      </Routes>{" "}
    </Router>
  );
};
export default App;
