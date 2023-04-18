import React from 'react'
import './UserConnection.css'
import './paris.css'

import { Link } from "react-router-dom";






const Paris = () => {

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
    <h5 class="card-title">Jackson Lee</h5>
    <p class="card-text">Destination: Paris, France<br></br>
Dates: May 15, 2023 - May 22, 2023<br></br>
Itinerary:

Day 1: Arrival in Paris, check-in at hotel<br></br>
Day 2: Visit the Eiffel Tower, take a boat tour on the Seine River<br></br>
Day 3: Explore the Louvre Museum, enjoy lunch at a local bistro<br></br>
Day 4: Day trip to the Palace of Versailles<br></br>
Day 5: Take a cooking class to learn how to make French pastries<br></br>
Day 6: Visit the Notre-Dame Cathedral and the Sainte-Chapelle, enjoy a picnic in a local park<br></br>
Day 7: Visit the Montmartre neighborhood and the Sacré-Cœur Basilica<br></br>
Day 8: Departure from Paris<br></br><br></br>
Accommodation: Hotel Le Marais<br></br>
Transportation: Round-trip flight from New York to Paris, metro and bus passes for getting around the city<br></br>
Budget: $3,000</p>
    <a href="#" class="btn btn-primary" >Send Message</a>
  </div>
</div>
      </div>
      
    </section>
  )
}

export default Paris;
