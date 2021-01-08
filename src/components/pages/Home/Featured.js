import React from 'react'
import "./Featured.css"
import Group1 from "./image/Featured/Group1.png";
import Group2 from "./image/Featured/Group2.png"
import Group3 from "./image/Featured/Group3.png"
import Group4 from "./image/Featured/Group4.png"
import Group5 from "./image/Featured/Group5.png"
import Group6 from "./image/Featured/Group6.png"

export default function Featured() {
    return (
           <div className="card m-2 p-2" style={{background:"#f1f1f1"}}>
              <div className="card-body">
                 <h3 className="card-title text-center">Highlighted Featured Courses</h3>
                 <div className="m-5">
                     <p className="card-subtitle mb-2 text-muted text-right">View All</p>
                     <div className="row row-cols-1 row-cols-md-3 g-4">
                         <div className="col">
                             <div className="card h-100">
                                 <img src={Group1} className="card-img-top" alt="..." />

                             </div>
                         </div>
                         <div className="col">
                             <div className="card h-100">
                                 <img src={Group2} className="card-img-top" alt="..." />
                                 <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h3 className="card-title text-center"><span className="graph">Graphic Design</span></h3>
                                      <h5 className="card-text text-center"><span className="texts">How To Become Freat Graphic Designer in 7 Days</span></h5>
                                 </div>
                             </div>
                         </div>
                         <div className="col">
                             <div className="card h-100">
                                 <img src={Group3} className="card-img-top" alt="..." />
                                 <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h2 className="card-title text-center"><span className="graph">Graphic Design</span></h2>
                                      <h5 className="card-text text-center"><span className="texts">How To Become Freat Graphic Designer in 7 Days</span></h5>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                         <div className="col">
                             <div className="card h-100">
                                 <img src={Group4} className="card-img-top" alt="..." />
                                 <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h2 className="card-title text-center"><span className="graph">Graphic Design</span></h2>
                                      <h5 className="card-text text-center"><span className="texts">How To Become Freat Graphic Designer in 7 Days</span></h5>
                                 </div>
                             </div>
                         </div>
                         <div className="col">
                             <div className="card h-100">
                                 <img src={Group5} className="card-img-top" alt="..." />
                                 <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h2 className="card-title text-center"><span className="graph">Graphic Design</span></h2>
                                      <h5 className="card-text text-center"><span className="texts">How To Become Freat Graphic Designer in 7 Days</span></h5>
                                 </div>
                             </div>
                         </div>
                         <div className="col">
                             <div className="card h-100">
                                 <img src={Group6} className="card-img-top" alt="..." />
                                 <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h2 className="card-title text-center"><span className="graph">Graphic Design</span></h2>
                                      <h5 className="card-text text-center"><span className="texts">How To Become Freat Graphic Designer in 7 Days</span></h5>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>
            </div>
     </div>
    )
}
