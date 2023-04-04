
import React from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className='logoDiv'>
                <a href="#" className='logo flex'>
                    <h1><MdOutlineTravelExplore className="icon"/> Journi.</h1>
                </a>

            </div>
            <div className='navBar'>
                <u1 className="navLists flex"> 
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Home
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            About
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Deals
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Community
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            More
                        </a>
                    </li>
                    <button className='btn'>
                        <a href="#">Book Now!</a>
                    </button>

                </u1>
                <div className="closeNavbar">
                    <AiFillCloseCircle className = 'icon'/>
             
                </div>

                <div className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>

            </div>
        </header>
    </section>
  )
}

export default Navbar
