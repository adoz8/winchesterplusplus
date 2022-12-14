/* eslint-disable no-unused-vars */
import React from "react";
import '../Components/SalmahComponents/MainStyleSheet.css';

import Button from "../Components/SalmahComponents/BackButton/BackButton";
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";
import Card from "../Components/SalmahComponents/Card/card";

const Salmah = () => {
    return(
        <div className="SalmahPage">
            <div className="Intro">
                <Button />
                <ColourSwitcher />
                <TypeAnimation /> 
            </div>
            <div className="InfoCards">
                <Card
                title = "Card Title"
                imageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflowers%2F&psig=AOvVaw20oY8yZicbnuEVQ_wHtaEY&ust=1671129081851000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCODz4Yvf-fsCFQAAAAAdAAAAABAE"
                body = "Testing if it works"
                />
            </div>
        </div>
    )
}

export default Salmah;