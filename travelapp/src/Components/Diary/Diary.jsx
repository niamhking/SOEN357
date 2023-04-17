import React from 'react'
import { Link } from "react-router-dom";


const Diary = () =>  {
  return (
    <section className="mainSection">
        <div class="navbar-brand-centred navbar" href="#!">
            Journi
        </div>
        <div className='Navbar'>
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
    </div>
        
    </section>
  )
}

export default Diary