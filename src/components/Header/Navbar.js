import React from 'react'
import "./Navbar.css";

export default function Navbar() {
    return (
        <div>
          <nav className="navbar navbar-light bg-light">
            <div className="container">
              <div className="icon">
                 <i className="fa fa-facebook"/>
                 <i className="fa fa-instagram m-1"/>
                 <i className="fa fa-twitter m-1"/>
              </div>
             <div className="navbar-brand">
                 <a className="navbar-brand " href="#">
                 <i className="fa fa-history"> Call Us 24/7</i>
                </a>
                 <a className="navbar-brand" href="#">
                 <i className="fa fa-phone">080-0000000</i>
                 </a>   
                 <a className="navbar-brand" href="#">
                 <i className="fa fa-globe">Login/Signup</i>
                 </a>
             </div>
            </div>
          </nav>
        </div>
    )
}
