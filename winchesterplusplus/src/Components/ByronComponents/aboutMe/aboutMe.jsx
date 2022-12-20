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
            <div className="freya-img__container">
                <img className="freya-0__img" src={require("./DogPictures/piggy0.jpg")}></img>
                <img className="freya-0__img" src={require("./DogPictures/piggy2.jpg")}></img>
                <img className="freya-0__img" src={require("./DogPictures/piggy3.jpg")}></img>
                <img className="freya-0__img" src={require("./DogPictures/piggy4.jpg")}></img>
                <img className="freya-0__img" src={require("./DogPictures/piggy5.jpg")}></img>
                <img className="freya-0__img" src={require("./DogPictures/piggy6.jpg")}></img>
            </div>
        </div>
    )
}



class AboutMe extends Component{
    render() {
        return(
            <Carousel slides={[Slide1, Slide2]}/>    
        )
    }

}

export default AboutMe;