import React from "react";
import ReactDOM from "react-dom";

//import "../Components/ByronComponents/main.css";
import "animate.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

import Introduction from "../Components/ByronComponents/introduction/introduction";
import NavBar from "../Components/ByronComponents/navbar/navbar";
import AboutMe from "../Components/ByronComponents/aboutMe/aboutMe";

const Byron = () => {
    return(
        <div className="main-page">
            <div className="page">
                <NavBar/>
                <Introduction/>
            </div>
            <AnimationOnScroll className="page2" animateIn="animate__animated animate__fadeIn" animateOut="">
                <AboutMe/>
            </AnimationOnScroll>
        </div>
    )
}

export default Byron;