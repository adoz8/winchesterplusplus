/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import "../Components/SalmahComponents/MainStyleSheet.css";


//import Home from "./Pages/home";
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navigationbar from "../Components/SalmahComponents/Navigation/Navbar";


const Salmah = () => {
  return (
    <div className="SalmahPage">
      <div>
        <ColourSwitcher />
        <TypeAnimation />
      </div>
    </div>
  );
};

export default Salmah;
