import React from "react";
import "./css/style.css";
import "./css/buttonfun.css";
import { Link } from "react-router-dom";

const Rachiname = () =>
{
    return(
        
        <div>
            <Link to={"/rachitha2"}>
            <h1 className="rachitha-text">Hi! I'm Rachitha</h1>
            </Link>
            {/* <h2>I'm 38 years old and from Sri Lanka</h2>
            <image */}

        </div>
    );
}
export default Rachiname;