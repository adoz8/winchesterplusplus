/* eslint-disable no-unused-vars */
 import React, {useState} from 'react'
 import './colour-switch.css';
 //This is a hook that allows us to track state in a function component


 function ColourSwitcher() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(current => !current);
    };

    return (
        <div className="Name" onClick={handleClick} style={{ backgroundColor: active ? "#B9D9EB" : "", color: active? "#F0F8FF": " "}}>
            <h1>Where am I from?</h1>
        </div>
    );

 }
 
 export default ColourSwitcher;