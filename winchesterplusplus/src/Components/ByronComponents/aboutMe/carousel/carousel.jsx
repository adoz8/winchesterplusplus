import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./carousel.css";


const Carousel = ({ slides }) => {
    console.log(slides)
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
            <button className="carousel__button-left" onClick={() => setIndex((currentIndex) => currentIndex - 1)}>left</button>
                {(slides[currentIndex] != undefined) ? slides[currentIndex]() : slides[0]()}
            <button className="carousel__button-right" onClick={() => setIndex((currentIndex) => currentIndex + 1)}>right</button>
        </div>
        
    )

}

export default Carousel 