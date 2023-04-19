import React from "react";
import "./Recommendations.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import Eiffel from "./images/Eiffel.jpeg";
import Louvre from "./images/Louvre.jpeg";
import Arc from "./images/Arc.jpeg";
import Cathedral from "./images/Cathedral.jpeg";
import luxem from "./images/luxem.jpeg";

const Recommendations = () => {
  return (
    <section>
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

      <div className="title">
        <h1 className="title1">Recommendations</h1>
        <h4 className="subtitle">Based on your Contacts and trips</h4>
      </div>
      <div className="container-trip">
        <div className="container-title">Trip to Paris</div>
        <div className="item">
          <img className="image" src={Eiffel} alt="Image description" />
          <a className="names" href="/triptoparis-eiffeltower">
            Eiffel Tower
          </a>
          <div className="reviewstars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <br />
        <div className="item">
          <img className="image" src={Louvre} alt="Image description" />
          <a className="names" href="/triptoparis-louvremuseum">
            Louvre Museum
          </a>
          <div className="reviewstars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <br />
        <div className="item">
          <img className="image" src={Arc} alt="Image description" />
          <a className="names" href="/triptoparis-arcdetriomphe">
            Arc De Triomphe
          </a>
          <div className="reviewstars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
        </div>
        <br />
        <div className="item">
          <img className="image" src={Cathedral} alt="Image description" />
          <a className="names" href="/triptoparis-cathedral">
            Cathedral Notre-Dame De Paris
          </a>
          <div className="reviewstars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <br />
        <div className="item">
          <img className="image" src={luxem} alt="Image description" />
          <a className="names" href="/triptoparis-luxembourg">
            Luxembourg Gardens
          </a>
          <div className="reviewstars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
