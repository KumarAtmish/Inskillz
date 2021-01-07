import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "./image/Courses/img1.png";
import img2 from "./image/Courses/img2.png";
import img3 from "./image/Courses/img3.png";


export default class Blog extends React.Component {
    render() {
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
          <div className="card m-2 p-2">
               <div class="card-body">
                 <h3 class="card-title text-center">Blog</h3>   
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
              <img src={img1} />
              </div>
              <div>
              <img src={img2} />
              </div>
              <div>
              <img src={img3} />
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
            </Slider>
          </div>
        );
      }
    }
