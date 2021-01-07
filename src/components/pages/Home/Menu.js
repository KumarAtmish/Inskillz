import React from 'react'
import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "./image/logo.png"

export default function Menu() {
    return (
            <div class="container">
              <div class="logo">
                 <img src={logo} alt="" />
              </div>
              <nav >
              <ul className="text">
                 <li><Link to="/" className="menu-link" style={{textDecoration:"none"}}>Home</Link></li>
                 <li><Link to="/about" className="menu-link">About</Link></li>
                 <li><Link to="/courses" className="menu-link">Courses</Link></li>
                 <li><Link to="/teachers " className="menu-link">Teachers</Link></li>
                 <li><Link to="/tech" className="menu-link">Tech on Inskillz</Link></li>
                 <li><Link to="/Contact" className="menu-link">Contact</Link></li> 
              </ul>
              </nav>
            </div>
    )
}
