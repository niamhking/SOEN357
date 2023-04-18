import React from "react";
import "./Cath.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaGrinHearts } from "react-icons/fa";
import Eiffel from "./images/Eiffel.jpeg";
import Louvre from "./images/Louvre.jpeg";
import Arc from "./images/Arc.jpeg";
import Cathedral from "./images/Cathedral.jpeg";
import luxem from "./images/luxem.jpeg";
import profilepic from "./images/profilepic.jpeg";

const ArcdeTriomphe = () => {
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
                <a class="nav-link" href="#!">
                  Activities
                </a>
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
      <div className="container-rec">
        <div className="container-title">Cathedral Notre-dam De Paris</div>
        <div className="container-rec2">
          <img className="image-p" src={Cathedral} alt="Eiffel Tower" />

          <div className="reviews">
            <h3 className="reviews-title">Reviews</h3>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <div className="numberofreviews">40 reviews</div>
            </div>
          </div>
          <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="user">
              <img className="user-pic" src={profilepic} alt="Eiffel Tower" />
              <div className="user-name">John Doe</div>
            </div>
            <div className="comment-section">
              <div className="user-comment">
                Magnificent architecture. Just Magical
              </div>
              <div className="smiley">
                <FaGrinHearts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArcdeTriomphe;
