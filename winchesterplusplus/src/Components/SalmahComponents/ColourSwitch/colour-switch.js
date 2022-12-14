/* eslint-disable no-unused-vars */
 import React, {useState} from 'react'
 //This is a hook that allows us to track state in a function component
 import "./colour-switch.css";

 function ColourSwitcher() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div onClick={handleClick} style={{ backgroundColor: active ? "default" : "success"}}>
            <h1>Salmah Shiham Abdulwahid</h1>
        </div>
    );

 }
 
 export default ColourSwitcher;