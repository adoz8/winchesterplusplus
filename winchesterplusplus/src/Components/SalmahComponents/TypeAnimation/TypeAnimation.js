/* eslint-disable no-unused-vars */
import React from 'react'
import Typed from 'react-typed';
import './TypeAnimation.css';


function TypeAnimation() {
    return (
        <div className="animated-typing">
        <Typed
            strings={[
                "Software Developer",
                "Degree Apprentice",
                "Working at Fujitsu",
                "Enjoying Front-End Development and Python",
            ]}  
            typeSpeed={130}
            backSpeed={80}
            loop
            />
        </div>
    )
}

export default TypeAnimation;