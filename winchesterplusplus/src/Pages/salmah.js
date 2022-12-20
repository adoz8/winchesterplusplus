/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import "../Components/SalmahComponents/MainStyleSheet.css";
import Button from "../Components/SalmahComponents/Button";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import CardsImageOverLay from "../Components/SalmahComponents/CardswithImageOverLay/CardsImageOverLay";


const Salmah = () => {
  return (
    <div className="SalmahPage">
      <div className="Button">
        <Button />
      </div>
      <div className="Title">
        <ColourSwitcher />
      </div>
      <div className="Subheading">
        <TypeAnimation />
      </div>
      <div className="Where am I from?">
        <CardsImageOverLay />
      </div>
    </div>
  );
};

export default Salmah;
