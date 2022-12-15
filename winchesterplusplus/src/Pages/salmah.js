/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import '../Components/SalmahComponents/MainStyleSheet.css';

import Button from "../Components/SalmahComponents/BackButton/BackButton";
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";
// import Card from "../Components/SalmahComponents/Card/card";

const Salmah = () => {
    return(
        <div className="SalmahPage">
            <div className="Intro">
                <Button />
                <ColourSwitcher />
                <TypeAnimation /> 
            </div>
            <div className="Cards">
                <card />
            </div>
        </div>
    )
}

export default Salmah;