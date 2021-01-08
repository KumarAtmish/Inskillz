import React from 'react'
import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "./image/logo.png"

export default function Menu() {
    return (
      <header className="header">
      <nav className="navbar navbar-expand-lg p-0">
          <div className="container">
             <Link to="/" className="navbar-brand text-uppercase font-weight-bold">
                <img src={logo} alt="" />
             </Link>
              <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
              
              <div id="navbarSupportedContent" className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item active"><Link to="/" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only">(current)</span></Link></li>
                      <li className="nav-item"><Link to="/about" className="nav-link text-uppercase font-weight-bold">About</Link></li>
                      <li className="nav-item"><Link to="/courses" className="nav-link text-uppercase font-weight-bold">Courses</Link></li>
                      <li className="nav-item"><Link to="/teachers" className="nav-link text-uppercase font-weight-bold">Teachers</Link></li>
                      <li className="nav-item"><Link to="/teachers" className="nav-link text-uppercase font-weight-bold">Tech on Inskillz</Link></li>
                      <li className="nav-item"><Link to="/tech" className="nav-link text-uppercase font-weight-bold">Contact</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
  </header>
    )
}
