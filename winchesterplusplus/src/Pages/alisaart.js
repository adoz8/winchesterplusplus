import React from "react";
import HeadArt from "../Components/AlisaComponents/continue/ArtPage/Header2";
import Arttography from "../Components/AlisaComponents/continue/ArtPage/ArtP";
import "../Components/AlisaComponents/continue/cont.css";
import Backtton2 from "../Components/AlisaComponents/continue/CatPage/Backtton2";

const Alisacat = () => {
  return (
    <div className="page2A">
      <div id="else">
        <HeadArt />
      </div>
      <div id="page2A">
        <Arttography />
      </div>
      <Backtton2 />
      <div>{/* <Artton /> */}</div>
    </div>
  );
};

export default Alisacat;
