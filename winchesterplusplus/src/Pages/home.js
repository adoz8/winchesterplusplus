import React from "react";
import { Link } from "react-router-dom"

import "../Components/HomeComponents/background.css";
import SpinningSun from "../Components/HomeComponents/SpinningSun/SpinningSun";
import StandingDog from "../Components/HomeComponents/StandingDog/standingdog";
import WalkingCat from "../Components/HomeComponents/WalkingCat/walkingcat";

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
            <SpinningSun />
        </div>
    )
}

export default Home