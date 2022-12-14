/* eslint-disable no-unused-vars */
 import React from 'react'
 import "./colour-switch.css";

 function ColourSwitcher() {
    const isBackgroundRed = true;

    return (
        <div className={isBackgroundRed ? 'background-red' : 'backgroun-blue'} /> 
    );

 }
 
 export default ColourSwitcher;