import React from "react";
import { Link } from "react-router-dom"

import "./button.css";

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

export default Button