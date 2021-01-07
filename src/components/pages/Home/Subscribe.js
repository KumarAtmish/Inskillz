import React from 'react'
import "./Subscribe.css"
import imag1 from "./image/Subscribe/imag1.svg"

export default function Subscribe() {
    return (
        <div>
            <div className="card">
                 <img className="ima" src={imag1} alt="..."/>
                  <div class="card-img-overlay text-white d-flex flex-row justify-content py-5">
                     <h2 class="card-title m-4">Subscribe to our newsletter</h2>   
                 </div> 
            </div>
        </div>
    )
}
