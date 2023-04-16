import React from 'react'
import './UserConnection.css'
import './paris.css'

import { Link } from "react-router-dom";






const Peru = () => {

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
    <h5 class="card-title">Marcus Robinson</h5>
    <p class="card-text">Destination: Peru<br></br>
Dates: August 1, 2023 - August 15, 2023<br></br>
Itinerary:
Day 1: Arrival in Lima, check-in at hotel<br></br>
Day 2: Visit the Larco Museum and the historic center of Lima<br></br>
Day 3: Take a flight to Cusco and explore the city<br></br>
Day 4: Visit the Sacred Valley and the Pisac Market<br></br>
Day 5: Visit Machu Picchu and hike Huayna Picchu<br></br>
Day 6: Visit Ollantaytambo and Moray<br></br>
Day 7: Travel to Puno and visit the Uros Islands on Lake Titicaca<br></br>
Day 8: Visit the Sillustani ruins and return to Puno<br></br>
Day 9: Take a flight back to Lima and visit Barranco district<br></br>
Day 10: Free day to explore or relax<br></br>
Day 11: Take a flight to Iquitos and embark on a 4-day Amazon river tour<br></br>
Day 12: Amazon river tour<br></br>
Day 13: Amazon river tour<br></br>
Day 14: Amazon river tour<br></br>
Day 15: Departure from Iquitos<br></br><br></br>
Accommodation: Belmond Palacio Nazarenas Cusco, Libertador Lake Titicaca Puno<br></br>
Transportation: Round-trip flight from New York to Lima, domestic flights in Peru, river tour<br></br>
Budget: $6,000</p>
    <a href="#" class="btn btn-primary" >Send Message</a>
  </div>
</div>
      </div>
      
    </section>
  )
}

export default Peru;
