import React from 'react'
import {NavLink,useNavigate} from "react-router-dom"
import "./Navbar.scss"
import logo from "../../assets/logo.jpeg"

const Navbar = () => {
const navigate = useNavigate();
  const goHomePage = () =>{
    navigate("/")
  }
  return (
    <div className='navbar-container'>
        <div className='navbar-logo'>
            <img src={logo} alt="Rick and Morty logo" onClick={goHomePage}/>
        </div>
        <div className='navbar-links'>
            <NavLink  className={(navData => navData.isActive ? "active" : "link")} to="/">Charachters</NavLink> 
            <NavLink   className={(navData => navData.isActive ? "active" : "link")} to='/episodes'>Episodes</NavLink> 
        </div>
    </div>
  )
}

export default Navbar