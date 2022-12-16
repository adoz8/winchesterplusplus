import React from "react";
import "./css/style.css";
import "./css/buttonfun.css";
import { Link } from "react-router-dom";

const Rachiname = () =>
{
    return(
        <Link to={"/rachitha2"}>
        <div>
            <h1 className="rachitha-text">Hi! I'm Rachitha</h1>
            <h2 className="rachitha-welcome">Welcome to my page</h2>
            {/* <h1 className="rachiname">Hi My name is Rachitha</h1> */}
            {/* <Link to "/rachitha2"> */}
            {/* <h1 className="rachiname">Hi My name is Rachitha</h1> */}
            {/* </Link> */}
        </div>
        </Link>
    );
}
export default Rachiname;