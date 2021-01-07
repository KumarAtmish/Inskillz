import React from 'react'
import "./Learn.css"
import test1 from "./image/test1.svg";
import test2 from "./image/test2.svg";
import test3 from "./image/test3.svg";
import test4 from "./image/test4.svg";
import test5 from "./image/test5.svg";
import test6 from "./image/test6.svg";

export default function Learn() {
    return (
        <div className="card mb-3" style={{background: "#f1f1f1"}}>
        {/* Header */}
        <div className="card-body">
          <h1 className="card-title text-center">Learn Something New<p>Everyday Anywhere Anytime</p></h1>
           {/* first row */}
           <div className="container">
              <div className="row m-5" >
                 <div className="col-sm text-center">
                     <div className="image_div" style={{background: "#fff"}}>
                         <img src={test1} className="pic" alt="..."/>
                     </div>
                     <h5 class="card-title">Online Testing</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                 </div>
                 <div className="col-sm text-center">
                     <div className="image_div" style={{background: "#fff"}}>
                         <img src={test2} className="pic" alt="..."/>
                     </div>
                     <h5 class="card-title">Online Testing</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                 </div>
                 <div className="col-sm text-center">
                     <div className="image_div" style={{background: "#fff"}}>
                         <img src={test3} className="pic" alt="..."/>
                     </div> 
                     <h5 class="card-title">Online Testing</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                 </div>
              </div>
                {/* second row */}
              <div className="row m-5">
                 <div className="col-sm text-center">
                     <div className="image_div" style={{background: "#fff"}}>
                         <img src={test4} className="pic" alt="..."/>
                     </div>
                     <h5 class="card-title">Online Testing</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                 </div>
                 <div className="col-sm text-center">
                     <div className="image_div" style={{background: "#fff"}}>
                         <img src={test5} className="pic" alt="..."/>
                     </div>
                     <h5 class="card-title">Online Testing</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                 </div>
                 <div className="col-sm text-center">
                     <div className="image_div" style={{background: "#fff"}}>
                     <img src={test6} className="pic" alt="..."/>
                 </div>  
                 <h5 class="card-title">Online Testing</h5>
                 <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                 </div>
              </div>
           </div>
       </div>
    </div>
    )
}
