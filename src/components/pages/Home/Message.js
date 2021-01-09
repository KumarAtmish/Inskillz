import React from 'react'
import "./Message.css"
import Contact from "../Contact/Contact"
import map from "./image/contact/map.png"

export default function Message() {
    return (
               <div className="card-body">
                 <h3 className="card-title text-center">Contact</h3>
                    
                     <div className="row">
                        <div className="col-lg-8 col-sm-12 col-12">
                         <Contact />
                        </div>
                        <div className="col-lg-4 col-sm-12 col-12">
                          <div className="container">
                            <img src={map} style={{width:"100%"}} />
                          <div className="row">
                            <div className="col-sm col-auto">
                              <i className="fa fa-envelope fa-2x" style={{color:"#008B8B"}} />
                              <p className="text-danger">hello@gmail.com</p>
                            </div>
                            <div className="col-sm col-auto">
                              <i className="fa fa-map-marker fa-2x" style={{color:"#008B8B"}} />
                              <p className="text-danger">india</p>
                            </div>
                          <div className="col-sm col-auto">
                            <i className="fa fa-phone fa-2x" style={{color:"#008B8B"}} />
                            <p className="text-danger">+9183783789</p>
                          </div>
                       </div>
                     </div>                
                   </div>
                 </div>
               </div>         
    )
}
