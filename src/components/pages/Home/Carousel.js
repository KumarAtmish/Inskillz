import React from 'react'
import "./Carousel.css"
import yyeftmxs from './image/yyeftmxs.png'

export default function Carousel() {
    return (
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
  </ol>
  
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src={yyeftmxs} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>Knowledge is power</h1>
        <p>Any succesfull career starts with good education</p>
        <button type="submit" className="btn-get-started">Learn more</button>
      </div>
    </div>
    
    
  </div>
</div>
    )
}
