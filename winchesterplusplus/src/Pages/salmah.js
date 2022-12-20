/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import "../Components/SalmahComponents/MainStyleSheet.css";
import Button from "../Components/SalmahComponents/Button";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import GroupExample from "../Components/SalmahComponents/CardGroup/CardGroup";




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
    </div>
  );
};

export default Salmah;
