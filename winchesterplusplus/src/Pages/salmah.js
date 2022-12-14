/* eslint-disable no-unused-vars */
import React from "react";
import '../Components/SalmahComponents/MainStyleSheet.css';

import Button from "../Components/SalmahComponents/BackButton/BackButton";
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";


const Salmah = () => {
    return(
        <div className="salmah-page">
            <div className="Intro">
                <Button />
                <ColourSwitcher />
                <TypeAnimation /> 
            </div>
        </div>
    )
}

export default Salmah;