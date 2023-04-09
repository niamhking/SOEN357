import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            {/* this is the logo */}
            <Link to="/" className="navbar-logo"> 
              Journi.  <i className='fab fa-typo-3'/>
            </Link> 
            <div className='menu-icon'>
              {/* this is where there is going to be the hamburger menu */}
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar