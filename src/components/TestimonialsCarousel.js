import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTATION
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";


const TestimonialsCarousel = () => {
    return (
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3500}
        >
           <>
           <img src={avatar1} alt="Miguel Davinci" />
           <div className="myCarousel">
           <h3>Miguel Davinci</h3>
           <p>lorem ipsum dolor sit amet dst sure i can improve 
               lorem ipsum dolor sit amet, consectetur lorem40 
           </p>
           </div>
           </> 
           <>
           <img src={avatar2} alt="Angelina Joli" />
           <div className="myCarousel">
           <h3>Angelina Joli</h3>
           <p>lorem ipsum dolor sit amet dst sure i can improve 
               lorem ipsum dolor sit amet, consectetur lorem40 
           </p>
           </div>
           </> 
           <>
           <img src={avatar3} alt="Leonardo D' Caprio" />
           <div className="myCarousel">
           <h3>Leonardo </h3>
           <p>lorem ipsum dolor sit amet dst sure i can improve 
               lorem ipsum dolor sit amet, consectetur lorem40 
           </p>
           </div>
           </> 
           <>
           <img src={avatar4} alt="Juan Pablo" />
           <div className="myCarousel">
           <h3>Juan Pablo</h3>
           <p>lorem ipsum dolor sit amet dst sure i can improve 
               lorem ipsum dolor sit amet, consectetur lorem40 
           </p>
           </div>
           </> 
        </Carousel>
    )
}

export default TestimonialsCarousel;
