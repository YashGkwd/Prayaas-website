import React from 'react'
import logo from '../../assets/background.png'
import './Navbar.css';
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
        <img src={logo} alt="" />
        
        <ul className="nav-menu">
            <Link to="/Events">
                <li>Events</li>
                </Link>
            <Link to="/Contribute">
                <li>Contribute</li>
                </Link>
            <Link to="/Team">
                <li>Team</li>
                </Link>
            <Link to={""}> 
            <button className='primaryBtn'>Donate</button>
            </Link>
        </ul>
        
    </div>
  );
}
