import React from "react";
// import Head from "../Components/AlisaComponents/head";
import Button from "../Components/AlisaComponents/continue/button";
import Paws from "../Components/AlisaComponents/paws";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../Components/AlisaComponents/continue/cont.css";

const Alisa = () => {
  return (
    <div>
      <div>
        <Paws />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Alisa;
