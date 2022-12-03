import React from "react";
import "./aboutMe.css";
import { Component } from "react";
import Carousel from "./carousel/carousel";

const Slide1 = () => {
    return (
        <div className="carousel__item">
            <h1 className="aboutMe__title">About Me</h1> 
            <h2 className="description">Some interesting facts about me...
            </h2>
        </div>
    )
}

const Slide2 = () => {
    return (
        <div className="carousel__item">
            <h1 className="aboutMe__title">Slide 2</h1> 
            <h2 className="description">slide 2's description</h2>
        </div>
    )
}

const Slide3 = () => {
    return(
        <div className="carousel__item">
            <h1 className="aboutMe__title">Slide 3</h1> 
            <h2 className="description">slide 3's description</h2>
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