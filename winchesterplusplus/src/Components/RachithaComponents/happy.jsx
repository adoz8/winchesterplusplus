import React from "react";
import { Link } from "react-router-dom";
import "./css/button.css";

const Happy = () =>
{
    return(
        <div>
            <Link to= "/">
                <button>Back</button>
            </Link>
        </div>
    );
}

const Button = () => {
    return(
        <div className="button__home-container">
            <Link to="/">
                <button className="button__home">
                    <span className="button__home-text">Back</span>
                </button>
            </Link>
        </div>
    )
}
export default Happy;