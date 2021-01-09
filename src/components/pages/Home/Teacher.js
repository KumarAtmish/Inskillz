import React from 'react'
import "./Teacher.css"
import logo from "./image/Teacher/logo.png";
import icon1 from "./image/Teacher/icon1.svg"
import icon2 from "./image/Teacher/icon2.svg"
import icon3 from "./image/Teacher/icon3.svg"
import Group from "./image/Teacher/Group.png"


export default function Teacher() {
    return (
        <div>
         <div class="container">
             <div class="title h1 text-center">Our Teachers</div>
         </div>

         <div class="container">
             <div class="card float-left border shadow">
                 <div class="row ">
                     <div class="col-sm-5">
                           <img class="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div class="col-sm-7">
                         <div class="card-block">
                             <h4>Velvet Vachon <span><img className="mx-3" src={logo} alt="" /></span></h4>
                             <strong className="head">Design Head</strong>
                             <p>
                             <span><img className="mx-2" src={icon1} alt="" /></span>
                             <span><img className="mx-2" src={icon2} alt="" /></span>
                             <span><img className="mx-2" src={icon3} alt="" /></span>
                             </p>
                             <p className="lh-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                         </div>
                     </div>
                     
                 </div>
             </div>

             <div class="card float-right border shadow">
                  <div class="row">
                     <div class="col-sm-5">
                         <img class="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div class="col-sm-7">
                         <div class="card-block">
                         <h4>Velvet Vachon <span><img className="mx-3" src={logo} alt="" /></span></h4>
                             <strong className="head">Design Head</strong>
                             <p>
                             <span><img className="mx-2" src={icon1} alt="" /></span>
                             <span><img className="mx-2" src={icon2} alt="" /></span>
                             <span><img className="mx-2" src={icon3} alt="" /></span>
                             </p>
                             <p className="lh-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                         </div>
                     </div>
                  </div>
             </div>
          </div>

          <div class="container py-3">
             <div class="card float-left border shadow">
                 <div class="row ">
                     <div class="col-sm-5">
                           <img class="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div class="col-sm-7">
                         <div class="card-block">
                             <h4>Velvet Vachon <span><img className="mx-3" src={logo} alt="" /></span></h4>
                             <strong className="head">Design Head</strong>
                             <p>
                             <span><img className="mx-2" src={icon1} alt="" /></span>
                             <span><img className="mx-2" src={icon2} alt="" /></span>
                             <span><img className="mx-2" src={icon3} alt="" /></span>
                             </p>
                             <p className="lh-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                         </div>
                     </div>
                     
                 </div>
             </div>

             <div class="card float-right border shadow">
                  <div class="row">
                     <div class="col-sm-5">
                         <img class="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div class="col-sm-7">
                         <div class="card-block">
                         <h4>Velvet Vachon <span><img className="mx-3" src={logo} alt="" /></span></h4>
                             <strong className="head">Design Head</strong>
                             <p>
                             <span><img className="mx-2" src={icon1} alt="" /></span>
                             <span><img className="mx-2" src={icon2} alt="" /></span>
                             <span><img className="mx-2" src={icon3} alt="" /></span>
                             </p>
                             <p className="lh-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                         </div>
                     </div>
                  </div>
             </div>
          </div>

          <div class="container py-3">
             <div class="card float-left border shadow">
                 <div class="row ">
                     <div class="col-sm-5">
                           <img class="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div class="col-sm-7">
                         <div class="card-block">
                             <h4>Velvet Vachon <span><img className="mx-3" src={logo} alt="" /></span></h4>
                             <strong className="head">Design Head</strong>
                             <p>
                             <span><img className="mx-2" src={icon1} alt="" /></span>
                             <span><img className="mx-2" src={icon2} alt="" /></span>
                             <span><img className="mx-2" src={icon3} alt="" /></span>
                             </p>
                             <p className="lh-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                         </div>
                     </div>
                     
                 </div>
             </div>

             <div class="card float-right border shadow">
                  <div class="row">
                     <div class="col-sm-5">
                         <img class="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div class="col-sm-7">
                         <div class="card-block">
                         <h4>Velvet Vachon <span><img className="mx-3" src={logo} alt="" /></span></h4>
                             <strong className="head">Design Head</strong>
                             <p>
                             <span><img className="mx-2" src={icon1} alt="" /></span>
                             <span><img className="mx-2" src={icon2} alt="" /></span>
                             <span><img className="mx-2" src={icon3} alt="" /></span>
                             </p>
                             <p className="lh-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                         </div>
                     </div>
                  </div>
             </div>
          </div>
          <div className="text-center py-4">
          View all
          </div>
     </div>
    )
}
