import React, { useEffect } from "react";
// import Head from "../Components/AlisaComponents/head";
import Button from "../Components/AlisaComponents/continue/button";
import Paws from "../Components/AlisaComponents/paws";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../Components/AlisaComponents/continue/cont.css";
//import { useNavigate } from "react-router-dom";

const Alisa = (props) => {
  useEffect(() => {
    setTimeout(() => {
      console.log("heeeelp please");
      // eslint-disable-next-line no-restricted-globals
      window.location.replace("/alisa2");
    }, 5000);
  }, []);
  return (
    <div>
      <div id="else">
        <Button />
      </div>
      <div id="justpaws">
        <Paws />
      </div>
    </div>
  );
};

export default Alisa;
