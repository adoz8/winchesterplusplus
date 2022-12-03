import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./carousel.css";

const Slide1 = () => {
    return (
        <>
            <h1>Slide1</h1> 
        </>
    )
}

const Slide2 = () => {
    return (
        <>
            <h1>Slide2</h1> 
        </>
    )
}

const Slide3 = () => {
    return(
        <>
            <h1>Slide 3</h1>
        </>
    )
}


const Carousel = () => {
    const slides = [<Slide1/>, <Slide2/>, <Slide3/>]
    const [currentIndex, setIndex] = useState(0)

    if(currentIndex > slides.length - 1)
    {
        setIndex(0)
    }
    else if(currentIndex < 0)
    {
        setIndex(slides.length - 1)
    }

    return (
        <div className="carousel__container">
            <button onClick={() => setIndex((currentIndex) => currentIndex - 1)}>left</button>
                {slides[currentIndex]}
            <button onClick={() => setIndex((currentIndex) => currentIndex + 1)}>right</button>
        </div>
        
    )

}

export default Carousel 