import React from "react";
import HeadCat from "../Components/AlisaComponents/continue/CatPage/Header2";
import Cattography from "../Components/AlisaComponents/continue/CatPage/CatP";
import "../Components/AlisaComponents/continue/cont.css";
import Backtton2 from "../Components/AlisaComponents/continue/CatPage/Backtton2";

const Alisacat = () => {
  return (
    <div className="page2A">
      <div id="else">
        <HeadCat />
      </div>
      <div id="page2A">
        <Cattography />
      </div>
      <Backtton2 />
      <div>{/* <Artton /> */}</div>
    </div>
  );
};

export default Alisacat;
