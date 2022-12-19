import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

import "../Components/HomeComponents/background.css";
import "./nightdaybutton.css";

import SpinningSun from "../Components/HomeComponents/SpinningSun/SpinningSun";
import SpinningMoon from "../Components/HomeComponents/SpinningSun/SpinningMoon";
import StandingDog from "../Components/HomeComponents/StandingDog/standingdog";
import WalkingCat from "../Components/HomeComponents/WalkingCat/walkingcat";
import Sunflower2 from "../Components/RachithaComponents/sunflower";

const Home = () => {
    const [isNight, setIsNight] = useState(false);
    return (
      <div id="background" className="home-background__container">
        {/* <Link to="/alisa">Alisa's page</Link>
          <br/>
          <Link to="/byron">Byron's page</Link>
          <br/>
          <Link to="/rachitha">Rachitha's page</Link>
          <br/>
          <Link to="/salmah">Salmah's page</Link> */}
        {isNight ? <SpinningMoon/> : <SpinningSun/>}
        <StandingDog />
        <WalkingCat />
        <Sunflower2/>
          <input className="nightdayinput" type="checkbox" id="night-toggle"/>
          <label onClick={() =>
            {
                var background = document.getElementById("background");
                if(isNight)
                {
                  background.classList.remove("home-night-background__container");
                  background.classList.add("home-background__container");
                  setIsNight(false)
                }
                else
                {
                  background.classList.add("home-night-background__container");
                  background.classList.remove("home-background__container");
                  setIsNight(true);
                }
                isNight ^= true;
      
            }} className="nightlabel" for="night-toggle"></label>
      </div>
    );

};

export default Home;