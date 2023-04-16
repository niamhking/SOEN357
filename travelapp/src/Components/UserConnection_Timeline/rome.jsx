import React from 'react'
import './UserConnection.css'
import './paris.css'

import { Link } from "react-router-dom";






const Rome = () => {

  return(
    <section className="mainSection">
      <br />
      <div className="navbar-brand-centred navbar" href="#!">
        Journi
      </div>
      <div className='Navbar'>
        <nav className="navbar navbar-expand-lg --bs-border-color-translucent">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!"></a>
            <div className="links">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Activities
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/timeline" className="nav-link">
                    Timeline
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='container'>
<div class="card"style={{maxWidth: "2080px"}}>
 
  <div class="card-body">
    <h5 class="card-title">Sophia Martinez</h5>
    <p class="card-text">Destination: Rome, Italy<br></br>
Dates: May 1, 2023 - May 8, 2023<br></br>
Itinerary:
Day 1: Arrival in Rome, check-in at hotel<br></br>
Day 2: Visit the Colosseum, Roman Forum and Palatine Hill<br></br>
Day 3: Visit the Vatican Museums, Sistine Chapel and St. Peter's Basilica<br></br>
Day 4: Take a day trip to Florence to see the Duomo and the Uffizi Gallery<br></br>
Day 5: Visit the Pantheon and the Trevi Fountain<br></br>
Day 6: Visit the Villa Borghese and the Spanish Steps<br></br>
Day 7: Free day to explore or relax<br></br>
Day 8: Departure from Rome<br></br>
Accommodation: Hotel Eden Rome<br></br><br></br>
Transportation: Round-trip flight from New York to Rome, metro passes for getting around the city<br></br>
Budget: $3,500</p>
    <a href="#" class="btn btn-primary" >Send Message</a>
  </div>
</div>
      </div>
      
    </section>
  )
}

export default Rome;
