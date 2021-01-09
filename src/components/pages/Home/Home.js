import React from 'react'
import Carousel from "./Carousel";
import Education from './Education';
import Menu from "./Menu";
import Learn from "./Learn";
import Browser from './Browser';
import Courses from './Courses'
import Featured from "./Featured";
import Teacher from "./Teacher";
import Client from "./Client";
import Blog from "./Blog";
import Subscribe from "./Subscribe";
import Message from "./Message"


export default function Home() {
    return (
        <div>
           <Menu />
           <Carousel />
           <Education />
           <Learn />
           <Browser />
           <Courses />
           <Featured />
           <Teacher />
           <Client />
           <Blog />
           <Subscribe />
           <Message />
        </div>
    )
}
