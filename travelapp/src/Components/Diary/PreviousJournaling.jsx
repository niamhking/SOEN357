import React from 'react'
import { Link } from "react-router-dom";
import './PreviousJournaling.css'


const PreviousJournaling = () =>  {
    // initial setup = there is nothing displayed aside a blank box
    const hasMemories = false;
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
        {/* if the user has not entered any memories, it is going to be displaying a blank box  */}
        {/* if the user has already entered elements in their diary, it is going to display multiple boxes */}
        {hasMemories ? (
          <div>
            {/* Display multiple boxes for previous memories */}
          </div>
        ) : (
          <div className="default-element">
            There is currently nothing in the journal!
          </div>
        )}


        
    </section>
  )
}

export default PreviousJournaling
