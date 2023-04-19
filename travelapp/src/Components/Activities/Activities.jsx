import React, { Component } from "react";
import "./activities.css";
import arc from "./images/arc.jpg";
import barav from "./images/barav.jpeg";
import champs from "./images/champs.jpg";
import eifelTower from "./images/eifelTower.jpg";
import epicure from "./images/epicure.jpg";
import louvre from "./images/louvre.jpg";
import notredame from "./images/notredame.jpg";
import Popup from "reactjs-popup";
import popup from "./images/PopUp.png";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

const contentStyle = {
  position: "center",
  background: "rgba(255, 255, 255, 0)",
  border: "0px solid",
  width: "633px",
  height: "423px",
  left: "362px",
  top: "266px",
};

class Activities extends Component {
  render() {
    return (
      <section className="mainSection">
        <br></br>
        <div class="navbar-brand-centred navbar" href="#!">
          Journi
        </div>
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

        <div class="container px-4 px-lg-5 mt-5">
          <div class="activityHeader">
            <h3
              style={{
                padding: "0.3rem",
                color: "white",
                textAlign: "center",
              }}
            >
              Your Paris Activities:
            </h3>
            <br></br>
          </div>
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={champs} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Champs-Élysées</h5>
                    {/* <!-- Trip price--> */}
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={eifelTower} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Eifel Tower</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={epicure} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Epicure Restaurant</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <Popup
                      trigger={
                        <button class="btn btn-outline-dark mt-auto">
                          {" "}
                          View Details{" "}
                        </button>
                      }
                      {...{
                        contentStyle,
                      }}
                      modal
                      nested
                    >
                      <img src={popup} alt="..." />
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={louvre} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Louvre Musuem</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={barav} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Le Barav Wine Bar</h5>
                    {/* <!-- Trip price--> */}
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={arc} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Arc de Triomphe</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={notredame} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Cathédrale Notre-Dame</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div>
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <br></br>
                    <br></br>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a
                      class="btn btn-outline-dark mt-auto btn-circle btn-xl"
                      href="#"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/recommendations"
          class="rightButton justify-content-end align-items-end"
        >
          Recomendations +
        </Link>
        <br></br>
      </section>
    );
  }
}

export default Activities;
