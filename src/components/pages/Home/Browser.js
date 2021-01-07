import React from 'react'
import "./Browser.css"
import icon1 from "./image/Browser/icon1.svg"
import icon2 from "./image/Browser/icon2.svg"
import icon3 from "./image/Browser/icon3.svg"
import icon4 from "./image/Browser/icon4.svg"
import icon5 from "./image/Browser/icon5.svg"

export default function Browser() {
    return (
        <div>
            <div>
              <div className="card-body">
                <h3 className="card-title text-center">Browse Courses By  Category</h3>
                 <div className="container" >

                     <div className="container m-5" >
                        <div className="row">
    
                        <div className="container">
                           <div className="row" >
                              <div className="col-2 shadow-none p-3 mb-5 bg-light rounded text-center m-1">
                              <img src={icon1} className="rounded float-start" alt="..." />
                              <p className="card-title text-center" >Business</p>
                              </div>
                              <div className="col-2 shadow-none p-3 mb-5 bg-light rounded text-center m-1">
                              <img src={icon2} className="rounded mx-auto d-block" alt="..."/>
                              <p className="card-title text-center">Business</p>
                              </div>
                              <div className="col-2 shadow-none p-3 mb-5 bg-light rounded text-center m-1">
                              <img src={icon3} className="rounded mx-auto d-block" alt="..."/>
                              <p className="card-title text-center">Business</p>
                              </div>
                              <div className="col-2 shadow-none p-3 mb-5 bg-light rounded text-center m-1">
                              <img src={icon4} className="rounded mx-auto d-block" alt="..."/>
                              <p className="card-title text-center">Business</p>
                              </div>
                              <div className="col-2 shadow-none p-3 mb-5 bg-light rounded text-center m-1">
                              <img src={icon5} className="rounded mx-auto d-block" alt="..."/>
                              <p className="card-title text-center">Business</p>
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
