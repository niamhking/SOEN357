import React from 'react'
import './UserConnection.css'
import './paris.css'

import { Link } from "react-router-dom";






const Mexico = () => {

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
    <h5 class="card-title">Matthew Smith</h5>
    <p class="card-text">Destination: Puerto Vallarta, Mexico<br></br>
Dates: July 10, 2023 - July 17, 2023<br></br>
Itinerary:
Day 1: Arrival in Puerto Vallarta, check-in at hotel<br></br>
Day 2: Visit the Malecon boardwalk and the Church of Our Lady of Guadalupe<br></br>
Day 3: Take a day trip to the Marietas Islands for snorkeling and swimming<br></br>
Day 4: Visit the Vallarta Botanical Gardens and El Eden zip-line<br></br>
Day 5: Take a day trip to Sayulita for surfing and beach time<br></br>
Day 6: Visit the San Sebastian del Oeste town and the Hacienda Jalisco<br></br>
Day 7: Free day to explore or relax<br></br>
Day 8: Departure from Puerto Vallarta<br></br><br></br>
Accommodation: Casa Kimberly Puerto Vallarta<br></br>
Transportation: Round-trip flight from New York to Puerto Vallarta, private transfers and tours<br></br>
Budget: $4,000</p>
    <a href="#" class="btn btn-primary" >Send Message</a>
  </div>
</div>
      </div>
      
    </section>
  )
}

export default Mexico;
