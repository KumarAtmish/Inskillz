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
         <div className="container">
             <h3 className="titl">Our Teachers</h3>
         </div>

         <div className="container">
             <div className="card float-left border shadow">
                 <div className="row ">
                     <div className="col-sm-5">
                           <img className="d-block w-90 py-4 mx-1" src={Group} alt=""  />
                     </div>
                     <div className="col-sm-7">
                         <div className="card-block">
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

             <div className="card float-right border shadow">
                  <div className="row">
                     <div className="col-sm-5">
                         <img className="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div className="col-sm-7">
                         <div className="card-block">
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

          <div className="container py-3">
             <div className="card float-left border shadow">
                 <div className="row ">
                     <div className="col-sm-5">
                           <img className="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div className="col-sm-7">
                         <div className="card-block">
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

             <div className="card float-right border shadow">
                  <div className="row">
                     <div className="col-sm-5">
                         <img className="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div className="col-sm-7">
                         <div className="card-block">
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

          <div className="container py-3">
             <div className="card float-left border shadow">
                 <div className="row ">
                     <div className="col-sm-5">
                           <img className="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div className="col-sm-7">
                         <div className="card-block">
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

             <div className="card float-right border shadow">
                  <div className="row">
                     <div className="col-sm-5">
                         <img className="d-block w-90 py-4 mx-1" src={Group} alt="" style={{borderRadius: "50%"}} />
                     </div>
                     <div className="col-sm-7">
                         <div className="card-block">
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
