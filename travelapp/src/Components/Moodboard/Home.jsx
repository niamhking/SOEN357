import React, { Component } from "react";
import "./home.css";
import paris from "./images/paris.jpg";
import croatia from "./images/croatia.jpg";
import barcelona from "./images/barcelona.jpg";
import japan from "./images/japan.jpg";
import mexico from "./images/mexico.jpg";
import peru from "./images/peru.jpg";
import rome from "./images/rome.jpg";
import Popup from "reactjs-popup";
import popup from "./images/PopUp.png";
import "reactjs-popup/dist/index.css";

import UserConnection from "../UserConnection_Timeline/UserConnection";
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

class Home extends Component {
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
              
                </li>
                <li class="nav-item">
                  <Link to="/diary" class="nav-link">
                    Diary
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
              Your Trips:
            </h3>
            <br></br>
          </div>
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={paris} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Paris</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <Link to="/activities" class="btn btn-outline-dark mt-auto">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={peru} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Peru</h5>
                    {/* <!-- Trip price--> */}
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={croatia} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Croatia</h5>
                    {/* <!-- Trip price--> */}
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={barcelona} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Barcelona</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={mexico} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Mexico</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={japan} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Japan</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Trip image--> */}
                <img class="card-img-top" src={rome} alt="..." />
                {/* <!-- Trip details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Trip name--> */}
                    <h5 class="fw-bolder">Rome</h5>
                  </div>
                </div>
                {/* <!-- Trip actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View
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
      </section>
    );
  }
}

export default Home;
