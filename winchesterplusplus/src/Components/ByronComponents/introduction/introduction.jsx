import React from "react";
import "./title/title.css";

import Title from "./title/title";
import Description from "./description/descrption";
import BongoCatRight from "./bongocat/bongocatright";
import BongoCatLeft from "./bongocat/bongocatleft";
import { useEffect } from "react";
import { useState } from "react";

const Introduction = () =>
{
    useState(() => {
        console.log("hello")
    }, [])

    return(
        <div className="introduction">
            <Title/>
            <Description/>
            <BongoCatLeft/>
            <BongoCatRight/>
        </div>
    )
}

export default Introduction;