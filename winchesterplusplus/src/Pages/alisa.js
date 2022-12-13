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
        <Button />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Alisa;
