import React from "react";
import { Link } from "react-router-dom"

import "../Components/HomeComponents/background.css";
import StandingDog from "../Components/HomeComponents/StandingDog/standingdog";
import WalkingCat from "../Components/HomeComponents/WalkingCat/walkingcat";
import sunflower2 from "../Components/RachithaComponents/sunflower";

const Home = () => {
    return(
        <div className="home-background__container">
            {/* <Link to="/alisa">Alisa's page</Link>
            <br/>
            <Link to="/byron">Byron's page</Link>
            <br/>
            <Link to="/rachitha">Rachitha's page</Link>
            <br/>
            <Link to="/salmah">Salmah's page</Link> */}
            <StandingDog/>
            <WalkingCat/>
            <sunflower2/>
        </div>
    )
}

export default Home