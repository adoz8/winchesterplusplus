import React from "react";
import { Link } from "react-router-dom"

import "./button.css";

const Button = () => {
    return(
        <div className="button__home-container">
            <Link to="/">
                <button className="button__home">Home</button>
            </Link>
        </div>
    )
}

export default Button