import React from "react";
import "./aboutMe.css";
import { Component } from "react";
import Carousel from "./carousel/carousel";

const Slide1 = () => {
    return (
        <div className="carousel__item">
            <h1 className="aboutMe__title">About Me</h1> 
            <h2 className="description">My journey into programing began by tinkering with simple hand tools in the
                garage building gadgets. Designing things, building them and then getting them
                to function was the thing that got me up early in the morning and kept me
                outside until well after dark. Most of the things I made were constructed from
                simple electronic or mechanical components, some more complex than others, but
                essentially hand built objects that relied on simple circuits or mechanical
                parts.
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