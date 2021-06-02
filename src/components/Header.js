import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
              <h1> Web Development </h1>
              <Typed 
              className="typed-text"
              strings={["Web Design", "Web Development" ]}
              typeSpeed = {50}
              backSpeed = {55}
              loop
              />
              <a href="#/" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
