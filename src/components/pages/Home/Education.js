import React from 'react'
import edu from "./image/edu.png";
import icon_1 from "./image/icon_1.png"
import icon_2 from "./image/icon_2.png"
import icon_3 from "./image/icon_3.png"
import "./Education.css";

export default function Education() {
    return (
        <div className="mb-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-6">
                 <img src={edu} alt="..."/>
                </div>
                <div className="col-md-6">
                 <div className="card-body">
                   <h3 className="card-title">Education At Its Best</h3>
                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                   <div className="icons">
                   <div className="row">
                    <img className="col-md-2 p-3" src={icon_1}/>
                    <span><h4 className="learn">Learn anything</h4></span>
                   </div>
                   <div className="row">
                    <img className="col-md-2 p-3" src={icon_2}/>
                    <span><h5 className="learn">Talk to our instructors</h5></span>
                   </div>
                   <div className="row">
                    <img className="col-md-2 p-3" src={icon_3}/>
                    <span><h5 className="learn">Speak with others</h5></span>
                   </div>
                 </div>
               </div>
               </div>
           </div>
       </div>
     </div>
    )
}
