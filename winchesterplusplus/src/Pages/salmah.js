/* eslint-disable no-unused-vars */
import React from "react";
import '../Components/SalmahComponents/MainStyleSheet.css';

import '../Components/SalmahComponents/ColourSwitch/colour-switch';
import '../Components/SalmahComponents/TypeAnimation/TypeAnimation';
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";


const Salmah = () => {
    return(
        <div className="salmah-page">
            <div className="Intro">
                <TypeAnimation />
                <ColourSwitcher />
            </div>
        </div>
    )
}

export default Salmah;