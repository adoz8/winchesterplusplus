/* eslint-disable no-unused-vars */
import React from 'react'
import Typed from 'react-typed';
import './TypeAnimation.css';


function TypeAnimation() {
    return (
        <div className="animated-typing">
        <Typed
            strings={[
                "Salmah Shiham",
                "Software Development",
                "Degree Apprentice",
            ]}  
            typeSpeed={130}
            backSpeed={80}
            loop
            />
        </div>
    )
}

export default TypeAnimation;