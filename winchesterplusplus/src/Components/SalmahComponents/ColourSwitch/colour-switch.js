/* eslint-disable no-unused-vars */
 import React, {useState} from 'react'
 //This is a hook that allows us to track state in a function component


 function ColourSwitcher() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(current => !current);
    };

    return (
        <div onClick={handleClick} style={{ backgroundColor: active ? "salmon" : "", color: active? "white": " "}}>
            <h1>Salmah Shiham Abdulwahid</h1>
        </div>
    );

 }
 
 export default ColourSwitcher;