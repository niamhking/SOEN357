import React from "react";
import "./UserConnection.css";
import { Link } from "react-router-dom";
import paris from "../Moodboard//images/paris.jpg";
import croatia from "../Moodboard//images/croatia.jpg";
import barcelona from "../Moodboard//images/barcelona.jpg";
import japan from "../Moodboard//images/japan.jpg";
import mexico from "../Moodboard//images/mexico.jpg";
import peru from "../Moodboard/images/peru.jpg";
import rome from "../Moodboard//images/rome.jpg";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import swal from "sweetalert";

const button = () => {
  swal("User will reach out to you soon!");
};

const UserConnection = () => {
  return (
    <section className="mainSection">
      <br></br>
      <div class="navbar-brand-centred navbar" href="#!">
        Journi
      </div>
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg --bs-border-color-translucent">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!"></a>
            <div class="links">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <Link to="/moodboard" class="nav-link">
                    Activities
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/timeline" class="nav-link">
                    Timeline
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <div class="row">
          <div className="col-md-3">
            <Link to="/paris">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <img
                    src={paris}
                    class="img-fluid rounded-start"
                    alt="..."
                  ></img>

                  <div class="col-md-8">
                    <div class="card-body">
                      <button class="add-button" onClick={button}>
                        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
                      </button>
                      <h5 class="card-title1">Paris</h5>
                      <h5 class="card-title">Jackson Lee</h5>
                      <p class="card-text">
                        Accommodation: Hotels <br></br> Budget:$3000<br></br>{" "}
                        Duration: 8days<br></br>
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">...</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/peru">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <img
                    src={peru}
                    class="img-fluid rounded-start"
                    alt="..."
                  ></img>

                  <div class="col-md-8">
                    <div class="card-body">
                      <button class="add-button" onClick={button}>
                        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
                      </button>
                      <h5 class="card-title1">Peru</h5>
                      <h5 class="card-title">Marcus Robinson</h5>
                      <p class="card-text">
                        Accommodation: Hotels <br></br> Budget:$3000<br></br>{" "}
                        Duration: 8days<br></br>
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">...</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/croatia">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <img
                    src={croatia}
                    class="img-fluid rounded-start"
                    alt="..."
                  ></img>

                  <div class="col-md-8">
                    <div class="card-body">
                      <button class="add-button" onClick={button}>
                        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
                      </button>
                      <h5 class="card-title1">Croatia</h5>
                      <h5 class="card-title">Chloe Williams</h5>
                      <p class="card-text">
                        Accommodation: Hotels <br></br> Budget:$3000<br></br>{" "}
                        Duration: 8days<br></br>
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">...</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/barcelona">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <img
                    src={barcelona}
                    class="img-fluid rounded-start"
                    alt="..."
                  ></img>

                  <div class="col-md-8">
                    <div class="card-body">
                      <button class="add-button" onClick={button}>
                        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
                      </button>
                      <h5 class="card-title1">Barcelona</h5>
                      <h5 class="card-title">Isabella Nguyen</h5>
                      <p class="card-text">
                        Accommodation: Hotels <br></br> Budget:$3000<br></br>{" "}
                        Duration: 8days<br></br>
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">...</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/mexico">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <img
                    src={mexico}
                    class="img-fluid rounded-start"
                    alt="..."
                  ></img>

                  <div class="col-md-8">
                    <div class="card-body">
                      <button class="add-button" onClick={button}>
                        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
                      </button>
                      <h5 class="card-title1">Mexico</h5>
                      <h5 class="card-title">Matthew Smith</h5>
                      <p class="card-text">
                        Accommodation: Hotels <br></br> Budget:$3000<br></br>{" "}
                        Duration: 8days<br></br>
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">...</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/japan">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <img
                    src={japan}
                    class="img-fluid rounded-start"
                    alt="..."
                  ></img>

                  <div class="col-md-8">
                    <div class="card-body">
                      <button class="add-button" onClick={button}>
                        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
                      </button>
                      <h5 class="card-title1">Japan</h5>
                      <h5 class="card-title">Ethan Davis</h5>
                      <p class="card-text">
                        Accommodation: Hotels <br></br> Budget:$3000<br></br>{" "}
                        Duration: 8days<br></br>
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">...</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/rome">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <img
                    src={rome}
                    class="img-fluid rounded-start"
                    alt="..."
                  ></img>

                  <div class="col-md-8">
                    <div class="card-body">
                      <button class="add-button" onClick={button}>
                        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
                      </button>
                      <h5 class="card-title1">Rome</h5>
                      <h5 class="card-title">Sophia Martinez</h5>
                      <p class="card-text">
                        Accommodation: Hotels <br></br> Budget:$3000<br></br>{" "}
                        Duration: 8days<br></br>
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">...</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/paris">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <img
                    src={paris}
                    class="img-fluid rounded-start"
                    alt="..."
                  ></img>

                  <div class="col-md-8">
                    <div class="card-body">
                      <button class="add-button" onClick={button}>
                        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
                      </button>
                      <h5 class="card-title1">Paris</h5>
                      <h5 class="card-title">John Doe</h5>
                      <p class="card-text">
                        Accommodation: Hotels <br></br> Budget:$3000<br></br>{" "}
                        Duration: 8days<br></br>
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">...</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <p className="join">
            *Click on a trip to know more<br></br>
            <b>Joining information:</b> To join this trip, send a message to the
            trip planner or click the "Join Trip" button within the app.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserConnection;
