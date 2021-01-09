import React from 'react'
import "./Courses.css";
import img1 from "./image/Courses/img1.png";
import img2 from "./image/Courses/img2.png";
import img3 from "./image/Courses/img3.png";

export default function Courses() {
    return (
        <div className="container">
           <h5 className="title">
               <h3 className="text-center">Courses By Top Rated Instructors</h3>
           </h5>
           <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
              <div className="col">
                  <div className="card h-100">
                     <img src={img1} className="card-img-top" alt="..." />
                     <div className="color">
                         <div className="card-body">
                         <h5 className="card-title">Web Design <span className="p-4"><small className="text-muted"><button className="btn-get-start">8hr 17min</button></small></span></h5>  
                         <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  magna aliqua.</p>
                     </div>
                     <div className="card-footer"> 
                     <p className="p-4"> <span className="stu">student</span>(200) <span className="m-4">2526471 views</span></p>
                         <hr />
                            <h6 className="text-center">Teacher:Ressie Rottman</h6>
                         <hr/>
                         <button className="btn-block" type="button">Join Now</button>
                     </div>
                  </div>
              </div>
          </div>
          <div className="col">
             <div className="card h-100">
                 <img src={img2} className="card-img-top" alt="..." />
                 <div className="color">
                     <div className="card-body">
                         <h5 className="card-title">Photography <span className="p-3"><small className="text-muted"><button className="btn-get-start">8hr 17min</button></small></span></h5>
                         <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  magna aliqua.</p>
                      </div>
                      <div className="card-footer">
                      <p className="p-4"> <span className="stu">student</span>(200) <span className="m-4">2526471 views</span></p>
                         <hr />
                            <h6 className="text-center">Teacher:Floyd Fukuda</h6>
                         <hr/>
                         <button className="btn-block" type="button">Join Now</button>
                      </div>
                  </div>
             </div>
         </div>
         <div className="col">
             <div className="card h-100">
                  <img src={img3} className="card-img-top" alt="..." />
                  <div className="color">
                     <div className="card-body">
                         <h5 className="card-title">Digital <span className="p-5"><small className="text-muted"><button className="btn-get-start">8hr 17min</button></small></span></h5>
                         <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  magna aliqua.</p>
                     </div>
                     <div className="card-footer">
                     <p className="p-4"> <span className="stu">student</span>(200) <span className="m-4">2526471 views</span></p>
                         <hr />
                            <h6 className="text-center">Teacher:Elena Cully</h6>
                         <hr/>
                         <button className="btn-block" type="button">Join Now</button>
                     </div>
                  </div>
             </div>
           </div>
         </div>
         <div className="view">
         View all
         </div>
        </div>
    )
}
