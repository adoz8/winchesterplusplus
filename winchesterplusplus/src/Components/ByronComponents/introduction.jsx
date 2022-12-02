import React from "react";
import "./title.css";
import "animate.css";

import Title from "./title";
import Description from "./descrption";

const Introduction = () =>
{
    return(
        <div className="introduction">
            <Title/>
            <Description/>
        </div>
    )
}

export default Introduction;