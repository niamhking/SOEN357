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
    <h5 class="card-title">Chloe Williams</h5>
    <p class="card-text">Destination: Croatia<br></br>
Dates: September 1, 2023 - September 10, 2023<br></br>
Itinerary:
Day 1: Arrival in Zagreb, check-in at hotel<br></br>
Day 2: Explore Zagreb's old town and visit the Zagreb Cathedral<br></br>
Day 3: Drive to Plitvice Lakes National Park and hike around the waterfalls<br></br>
Day 4: Visit the coastal city of Zadar and watch the sunset at the Sea Organ<br></br>
Day 5: Ferry to Hvar island and relax on the beach<br></br>
Day 6: Visit the medieval town of Dubrovnik and walk the city walls<br></br>
Day 7: Take a boat tour around the Elafiti Islands<br></br>
Day 8: Wine tasting in the Peljesac Peninsula<br></br>
Day 9: Free day to explore or relax<br></br>
Day 10: Departure from Zagreb<br></br><br></br>
Accommodation: Hotel Dubrovnik Palace, Hotel Hvar<br></br>
Transportation: Round-trip flight from New York to Zagreb, rental car, ferry tickets<br></br>
Budget: $4,000</p>
    <a href="#" class="btn btn-primary" >Send Message</a>
  </div>
</div>
      </div>
      
    </section>
  )
}

export default Croatia;
