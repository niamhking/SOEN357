import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
// import plane from "./planeBackground.png";
import UserConnection from "./Components/UserConnection_Timeline/UserConnection";
import BackgroundPlane from "./Components/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      </Routes>{" "}
    </Router>
  );
};
export default App;
