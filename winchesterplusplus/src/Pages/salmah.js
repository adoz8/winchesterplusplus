/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import "../Components/SalmahComponents/MainStyleSheet.css";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/home";
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";
import Navigationbar from "../Components/SalmahComponents/Navigation/Navbar";


const Salmah = () => {
  return (
    <div className="SalmahPage">
      <div className="PagePart1">
        <Navigationbar />
        <ColourSwitcher />
        <TypeAnimation />
      </div>
    </div>
  );
};

export default Salmah;
