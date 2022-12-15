import React from "react";
import { Link } from "react-router-dom";

import "./walkingcat.css"



const WalkingCat = () => {
    return(
        <div>
            <Link to="/alisa">
                <div id="gato"/>
            </Link>
        </div>
    )
}

export default WalkingCat;