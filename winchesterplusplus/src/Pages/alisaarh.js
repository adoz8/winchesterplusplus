import React from "react";
import HeadArh from "../Components/AlisaComponents/continue/ArhPage/Header2";
import Arhtography from "../Components/AlisaComponents/continue/ArhPage/ArhP";
import "../Components/AlisaComponents/continue/cont.css";
import Backtton2 from "../Components/AlisaComponents/continue/CatPage/Backtton2";

const Alisacat = () => {
  return (
    <div className="page2A">
      <div id="else">
        <HeadArh />
      </div>
      <div id="page2A">
        <Arhtography />
      </div>
      <Backtton2 />
      <div>{/* <Artton /> */}</div>
    </div>
  );
};

export default Alisacat;
