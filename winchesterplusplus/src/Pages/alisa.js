import React from "react";
// import Head from "../Components/AlisaComponents/head";
import Button from "../Components/AlisaComponents/continue/button";
import Paws from "../Components/AlisaComponents/paws";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Alisa = () => {
  return (
    <div>
      <div>
        <Paws />
      </div>
      <div>
        {/* <Button /> */}
        <AnimationOnScroll
          className="page2"
          animateIn="animate__animated animate__fadeIn"
          animateOut=""
        >
          <Button />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Alisa;
