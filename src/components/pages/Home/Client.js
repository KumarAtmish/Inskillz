import React from 'react'
import "./Client.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "./image/client/img1.png";
import img2 from "./image/client/img2.png";
import img3 from "./image/client/img3.png";
import img4 from "./image/client/img4.png";

export default class Client extends React.Component {
    render(){
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear"
          };
          return (
            <div className="m-2 p-2" style={{background:"#f1f1f1"}}>
            <div className="body">
                   <h3 className="text-center">What client say</h3>   
                  </div>  
              <Slider {...settings}>
                <div>
                  <img src={img1} />
                </div>
                <div>
                <img src={img2} />
                </div>
                <div>
                <img src={img3} />
                </div>
                <div>
                <img src={img4} />
                </div>
                <div>
                <img src={img1} />
                </div>
                <div>
                <img src={img2} />
                </div>
                <div>
                <img src={img3} />
                </div>
                <div>
                <img src={img4} />
                </div>
                <div>
                <img src={img1} />
                </div>
              </Slider>
              <div className="py-5">
              <p className="text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            </div>
          );
    }
}
