import React from "react";
import "./aboutMe.css";
import { Component } from "react";
import Carousel from "./carousel/carousel";

const Slide1 = () => {
    return (
        <div className="carousel__item">
            <h1>Slide1</h1> 
        </div>
    )
}

const Slide2 = () => {
    return (
        <div className="carousel__item">
            <h1>Slide2</h1> 
        </div>
    )
}

const Slide3 = () => {
    return(
        <div className="carousel__item">
            <h1>Slide 3</h1>
        </div>
    )
}


class AboutMe extends Component{
    render() {
        return(
            <Carousel slides={[Slide1, Slide2, Slide3]}/>    
        )
    }

}

export default AboutMe;