import React from 'react'
import "./Message.css"
import Contact from "../Contact/Contact"
import map from "./image/contact/map.png"

export default function Message() {
    return (
        <div>
            <div className="card">
               <div className="card-body">
                 <h3 className="card-title text-center">Contact</h3>
                    
                 <div className="container">
                     <div className="row">
                        <div className="col-8">
                         <Contact />
                        </div>
                        <div className="col-4">
                          <div class="container">
                            <img src={map} style={{width:"100%"}} />
                          <div className="row">
                            <div className="col-sm">
                              <i class="fa fa-envelope fa-3x" style={{color:"#008B8B"}} />
                              <p className="fs-6 text-start text-danger">hello@gmail.com</p>
                            </div>
                            <div className="col-sm">
                              <i class="fa fa-map-marker fa-3x" style={{color:"#008B8B"}} />
                              <p className="fs-6 text-start text-danger">india</p>
                            </div>
                          <div className="col-sm">
                            <i class="fa fa-phone fa-3x" style={{color:"#008B8B"}} />
                            <p className="fs-6 text-start text-danger">+9183783789</p>
                          </div>
                       </div>
                     </div>                
                   </div>
                 </div>
               </div>         
             </div>
          </div>
       </div>
    )
}
