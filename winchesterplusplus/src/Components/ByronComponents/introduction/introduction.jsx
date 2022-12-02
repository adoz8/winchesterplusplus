import React from "react";
import "./title/title.css";

import Title from "./title/title";
import Description from "./description/descrption";

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