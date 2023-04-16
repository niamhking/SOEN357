import React from 'react'
import './UserConnection.css'
import './paris.css'

import { Link } from "react-router-dom";






const Croatia = () => {

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
    <h5 class="card-title">Isabella Nguyen</h5>
    <p class="card-text">Destination: Barcelona, Spain<br></br>
Dates: June 15, 2023 - June 21, 2023<br></br>
Itinerary:
Day 1: Arrival in Barcelona, check-in at hotel<br></br>
Day 2: Visit the Sagrada Familia and Park Guell<br></br>
Day 3: Explore the Gothic Quarter and La Rambla<br></br>
Day 4: Day trip to Montserrat to see the monastery and hike<br></br>
Day 5: Visit the Picasso Museum and take a bike tour around the city<br></br>
Day 6: Visit the Camp Nou stadium and enjoy tapas in the Gracia neighborhood<br></br>
Day 7: Departure from Barcelona<br></br><br></br>
Accommodation: Hotel Arts Barcelona<br></br>
Transportation: Round-trip flight from New York to Barcelona, metro and bus passes for getting around the city<br></br>
Budget: $2,500</p>
    <a href="#" class="btn btn-primary" >Send Message</a>
  </div>
</div>
      </div>
      
    </section>
  )
}

export default Croatia;
