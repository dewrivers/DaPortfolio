import React from "react";
//PROYECT PICTURES
import quiz from "../images/coding-quiz.png";
import burger from "../images/Burger.png";
import dashboard from "../images/weather-dashboard.png";
//FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {
    // Coding Quiz Proyect
const openPopupboxQuiz = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={quiz} alt="Coding Quiz Proyect..." />
        <p> descipcion de el proyecto </p>
        <b>GitHub:</b> <a className="hyper-link" href="#/" onClick={() => window.open("https://github.com/dewrivers/quiz-challenge", "_blank")}>https://github.com/dewrivers/quiz-challenge</a>
        <br/>
        <b>Demo:</b> <a className="hyper-link" href="#/" onClick={() => window.open("https://dewrivers.github.io/quiz-challenge/", "_blank")}>https://dewrivers.github.io/quiz-challenge/</a>
        </>
    )
    
    PopupboxManager.open({ content })
}

const popupboxConfigQuiz = {
    titleBar: {
      enable: true,
      text: "Take a Coding Quiz..."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

    // Da Burger Proyect
const openPopupboxBurger = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={burger} alt="Coding Quiz Proyect..." />
        <p> descipcion de el proyecto </p>
        <b>GitHub:</b> <a className="hyper-link" href="#/" onClick={() => window.open("https://github.com/dewrivers/burger", "_blank")}>https://github.com/dewrivers/burger</a>
        <br />
        <b>Demo:</b> <a className="hyper-link" href="#/" onClick={() => window.open("https://hidden-falls-15621.herokuapp.com/burgers", "_blank")}>https://hidden-falls-15621.herokuapp.com/burgers</a>
        </>
    )
    
    PopupboxManager.open({ content })
}

const popupboxConfigBurger = {
    titleBar: {
      enable: true,
      text: "Make your own burgers!!"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

   // Weather Dashboard
const openPopupboxDashboard= () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={dashboard} alt="Weather Dashboard Proyect..." />
        <p> descipcion de el proyecto </p>
        <b>GitHub:</b> <a className="hyper-link" href="#/" onClick={() => window.open("https://github.com/dewrivers/Weather-APP", "_blank")}>https://github.com/dewrivers/Weather-APP</a>
        <br />
        <b>Demo:</b> <a className="hyper-link" href="#/" onClick={() => window.open("https://dewrivers.github.io/Weather-APP/", "_blank")}>https://dewrivers.github.io/Weather-APP/</a>
        </>
    )
    
    PopupboxManager.open({ content })
}

const popupboxConfigDashboard = {
    titleBar: {
      enable: true,
      text: "Check the weather."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxQuiz}>
                    <img className="portfolio-image" src={quiz} alt="Coding Quiz Proyect." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/*  */}
                <div className="portfolio-image-box" onClick={openPopupboxBurger}>
                    <img className="portfolio-image" src={burger} alt="burger Proyect." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/*  */}
                <div className="portfolio-image-box" onClick={openPopupboxDashboard}>
                    <img className="portfolio-image" src={dashboard} alt="weather dashboard Proyect." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
         <PopupboxContainer {...popupboxConfigQuiz} />
         <PopupboxContainer {...popupboxConfigBurger} />
         <PopupboxContainer {...popupboxConfigDashboard} />
         </div>
    )
}

export default Portfolio
