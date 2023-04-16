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
    <h5 class="card-title">Ethan Davis</h5>
    <p class="card-text">Destination: Japan<br></br>
Dates: April 1, 2024 - April 15, 2024<br></br>
Itinerary:
Day 1: Arrival in Tokyo, check-in at hotel<br></br>
Day 2: Visit the Tsukiji Fish Market and the Sensoji Temple<br></br>
Day 3: Visit the Meiji Shrine and Harajuku neighborhood<br></br>
Day 4: Take the bullet train to Kyoto and visit the Fushimi Inari Shrine<br></br>
Day 5: Visit the Kinkakuji Temple and the Nijo Castle in Kyoto<br></br>
Day 6: Take the bullet train to Hiroshima and visit the Peace Memorial Park<br></br>
Day 7: Visit the Miyajima Island and Itsukushima Shrine<br></br>
Day 8: Take the bullet train back to Tokyo and visit the Ueno Park<br></br>
Day 9: Visit the Imperial Palace and the Tokyo Tower<br></br>
Day 10: Free day to explore or relax<br></br>
Day 11: Visit the Yokohama Chinatown and the Yokohama Landmark Tower<br></br>
Day 12: Visit the Shinjuku Gyoen National Garden and the Tokyo Metropolitan Government Building<br></br>
Day 13: Departure from Tokyo<br></br><br></br>
Accommodation: Conrad Tokyo, Hotel Granvia Kyoto<br></br>
Transportation: Round-trip flight</p>
    <a href="#" class="btn btn-primary" >Send Message</a>
  </div>
</div>
      </div>
      
    </section>
  )
}

export default Croatia;
