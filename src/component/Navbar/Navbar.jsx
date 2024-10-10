import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='menu'>
      <div className="container">
        <div className="menuRow">
          <div className="menuLogo">
            <img src='Image/logo.png' alt='logo'/>
          </div>
          <div className="menuText">
            <ul>
              <li> <Link to='#'> Home </Link> </li>
              <li> <Link to='#'> Services </Link> </li>
              <li> <Link to='#'> Schedule </Link> </li>
              <li> <Link to='#'> Contact us </Link> </li>
            </ul>
          </div>
          <div className="menuButton">
            <button> Check Status </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar