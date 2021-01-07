import React from 'react'
import logo from "../pages/Home/image/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="card mx-3">
            <footer className="footer-area footer--light">
  <div className="footer-big">
    {/*  start .container  */}
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div className="footer-widget">
            <div className="widget-about">
              <img src={logo} alt="" className="img-fluid" />
            </div>
          </div>
          {/*  Ends: .footer-widget  */}
        </div>
        {/*  end /.col-md-4  */}
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu footer-menu--1">
              <h4 className="footer-widget-title  text-danger"> Commuinity </h4>
              <ul className="text-info">
                <li>
                  <Link to="#">Create Account</Link>
                </li>
                <li>
                  <Link to="#">Go to Premium</Link>
                </li>
                <li>
                  <Link to="#">Refer A Friend</Link>
                </li>
              </ul>
            </div>
            {/*  end /.footer-menu  */}
          </div>
          {/*  Ends: .footer-widget  */}
        </div>
        {/*  end /.col-md-3  */}
         
         

        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu">
              <h4 className="footer-widget-title  text-danger">Support</h4>
              <ul>
                <li>
                  <Link to="#">Terms Contition</Link>
                </li>
                <li>
                  <Link to="#">Privacy & Policy</Link>
                </li>
                <li>
                  <Link to="#">Get Help</Link>
                </li>
              </ul>
            </div>
            {/*  end /.footer-menu  */}
          </div>
          {/*  Ends: .footer-widget  */}
        </div>
        {/*  end /.col-lg-3  */}

        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu no-padding">
              <h4 className="footer-widget-title  text-danger">Join Us</h4>
              <ul>
                <li>
                  <Link to="#">Become Teachers</Link>
                </li>
                <li>
                  <Link to="#">Become Student</Link>
                </li>
                <li>
                  <Link to="#">Become Both</Link>
                </li>
              </ul>
            </div>
            {/*  end /.footer-menu  */}
          </div>
          {/*  Ends: .footer-widget  */}
        </div>
        {/*  Ends: .col-lg-3  */}

      </div>
      {/*  end /.row  */}
    </div>
    {/*  end /.container  */}
  </div>
  {/*  end /.footer-big  */}

 
</footer>
        </div>
    )
}
