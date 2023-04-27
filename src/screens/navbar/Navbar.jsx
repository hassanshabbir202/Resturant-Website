import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { FaUser } from "react-icons/fa"
import "../navbar/Navbar.scss"

const Navbar = () => {


  return (
    <div>
              {/* <div className="sideDiv"></div> */}
             <div className="navbarContainer">
         <div className="logoContainer">
         <img className='logo' src={logo} alt="" />
         </div>
          <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="auth">
         <div className="loginContainer">
          <FaUser className='loginIcon'/>
         <button className='login'><Link to="/login">Login</Link></button>
          <button className='register'><Link to="/register">Register</Link></button>
         </div>
        </div>
        <div className="hamburderMenu">
          <GiHamburgerMenu className='hamburger' />
        </div>
          </div>
    </div>
  )
}

export default Navbar
