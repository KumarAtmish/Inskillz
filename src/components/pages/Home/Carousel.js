import React from 'react'
import "./Carousel.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import yyeftmxs from './image/yyeftmxs.png'

export default function Carousel() {
    return (
     <div className="c">
        <AliceCarousel autoPlay autoPlayInterval="3000">
           <img src={yyeftmxs} className="sliderimg"/>
           <img src={yyeftmxs} className="sliderimg"/>
           <img src={yyeftmxs} className="sliderimg"/>
           <img src={yyeftmxs} className="sliderimg"/>
        </AliceCarousel>
        
     </div>
    )
}
