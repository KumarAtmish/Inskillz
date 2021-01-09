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
                   <div className="row">
                    <img className="col-md-2 p-3" src={icon_1}/>
                    <strong className="col-md-4 m-5">Learn anything</strong>
                   </div>
                   <div className="row">
                    <img className="col-md-2 p-3" src={icon_2}/>
                    <strong className="col-md-4 m-5">Talk to our instructors</strong>
                   </div>
                   <div className="row">
                    <img className="col-md-2 p-3" src={icon_3}/>
                    <strong className="col-md-4 m-5">Speak with others</strong>
                   </div>
                 </div>
               </div>
           </div>
       </div>
     </div>
    )
}
