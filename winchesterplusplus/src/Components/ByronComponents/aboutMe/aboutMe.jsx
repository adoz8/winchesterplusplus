import React from "react";
import "./aboutMe.css";
import { Component } from "react";
import Carousel from "./carousel/carousel";
import Map from "./map";

const Slide1 = () => {
    return (
        <div className="carousel__item">
            <h1 className="aboutMe__title">About Me</h1> 
            <ul className="description aboutMe__list-items">
                <li>I'm 19</li>
                <li>From stafford</li>
                <li>Worked at two warehouses before Fujitsu (glad to be here)</li>
                <div className="map-img__container">
                    <Map/>
                </div>
            </ul>
        </div>
    )
}

const Slide2 = () => {
    return (
        <div className="carousel__item">
            <h1 className="aboutMe__title">My dog</h1> 
            <h2 className="description">Got a pet dog called freya</h2>
            <img className="freya__img" src={require("./freya.jpg")}></img>
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