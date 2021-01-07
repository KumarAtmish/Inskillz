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
                     <div class="row row-cols-1 row-cols-md-3 g-4">
                         <div class="col">
                             <div class="card h-100">
                                 <img src={Group1} class="card-img-top" alt="..." />

                             </div>
                         </div>
                         <div class="col">
                             <div class="card h-100">
                                 <img src={Group2} class="card-img-top" alt="..." />
                                 <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h2 class="card-title text-center">Graphic Design</h2>
                                      <h5 class="card-text text-center">How To Become Freat Graphic Designer in 7 Days</h5>
                                 </div>
                             </div>
                         </div>
                         <div class="col">
                             <div class="card h-100">
                                 <img src={Group3} class="card-img-top" alt="..." />
                                 <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h2 class="card-title text-center">Graphic Design</h2>
                                      <h5 class="card-text text-center">How To Become Freat Graphic Designer in 7 Days</h5>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
                         <div class="col">
                             <div class="card h-100">
                                 <img src={Group4} class="card-img-top" alt="..." />
                                 <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h2 class="card-title text-center">Graphic Design</h2>
                                      <h5 class="card-text text-center">How To Become Freat Graphic Designer in 7 Days</h5>
                                 </div>
                             </div>
                         </div>
                         <div class="col">
                             <div class="card h-100">
                                 <img src={Group5} class="card-img-top" alt="..." />
                                 <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h2 class="card-title text-center">Graphic Design</h2>
                                      <h5 class="card-text text-center">How To Become Freat Graphic Designer in 7 Days</h5>
                                 </div>
                             </div>
                         </div>
                         <div class="col">
                             <div class="card h-100">
                                 <img src={Group6} class="card-img-top" alt="..." />
                                 <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                                      <h2 class="card-title text-center">Graphic Design</h2>
                                      <h5 class="card-text text-center">How To Become Freat Graphic Designer in 7 Days</h5>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>
            </div>
     </div>
    )
}
