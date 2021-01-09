import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
          <nav className="navbar navbar-light bg-light">
              <div className="icon">
                 <i className="fa fa-facebook" to="https://www.facebook.com/"/>
                 <i className="fa fa-instagram m-1" to="https://www.instagram.com/"/>
                 <i className="fa fa-twitter m-1" to="https://twitter.com/home"/>
              </div>
             <div className="navbar-brand">
                 <Link className="navbar-brand " to="#">
                 <i className="fa fa-history"> Call Us 24/7</i>
                </Link>
                 <Link className="navbar-brand" to="#">
                 <i className="fa fa-phone">080-0000000</i>
                 </Link>   
                 <Link className="navbar-brand" to="#">
                 <i className="fa fa-globe">Login/Signup</i>
                 </Link>
             </div>
          </nav>
        </div>
    )
}
