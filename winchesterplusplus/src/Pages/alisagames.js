import React from "react";
import HeadGames from "../Components/AlisaComponents/continue/GamesPage/Header2";
import Gameography from "../Components/AlisaComponents/continue/GamesPage/GamesP";
import "../Components/AlisaComponents/continue/cont.css";
import Backtton2 from "../Components/AlisaComponents/continue/CatPage/Backtton2";

const Alisacat = () => {
  return (
    <div className="page2A">
      <div id="else">
        <HeadGames />
      </div>
      <div id="page2A">
        <Gameography />
      </div>
      <Backtton2 />
      <div>{/* <Artton /> */}</div>
    </div>
  );
};

export default Alisacat;
