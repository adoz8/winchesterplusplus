/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import "../Components/SalmahComponents/MainStyleSheet.css";
import Button from "../Components/SalmahComponents/Button";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import Cards from "../Components/SalmahComponents/Cards/Cards";





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
      <div className="Card_Wrapper">
        <Cards
        altext="Victoria Melbourne"
        image={require("../Components/SalmahComponents/Cards/melbourne.png")}
        title="Born in?"
        content="I was born in Australia, Melbourne.
        But I only lived there for 6 months."
        />
        <Cards
        altext="Sri Lanka Map"
        image={require("../Components/SalmahComponents/Cards/srilanka.png")}
        title="My Nationality is?"
        content="My Nationality is Sri Lankan however I have only lived there for around 4-5 years.
        I am the least Sri Lankan in my family and cannot stand spice."
        />
        <Cards
        altext="Narborough Road"
        image={require("../Components/SalmahComponents/Cards/leicester.png")}
        title="Where do I live now?"
        content="I have been living in Leicester since 2008.
        I used to live in Reading when I first moved to the UK in 2006, so not too far from the Bracknell Office.
        Did you know Leicester has UK's most diverse street with shopkeepers coming from 23 different countries!"
        />
        <Cards
        altext="Languages"
        image={require("../Components/SalmahComponents/Cards/languages.png")}
        title="Languages"
        content="I enjoy learning different language and cultures, currently I can hold a basic conversation in Arabic, French, Japanese and Korean.
        I learn them through Anime, Drama and other forms of culture."
        />
        <Cards
        altext="Badminton Racket"
        image={require("../Components/SalmahComponents/Cards/sports.png")}
        title="Hobbies"
        content="In my free time, I read a lot of books, play Badminton, go Cycling and bake."
        />
      </div>
    </div>
  );
};

export default Salmah;
