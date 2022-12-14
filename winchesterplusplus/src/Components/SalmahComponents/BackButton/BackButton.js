import React from "react";
import { Link } from "react-router-dom"

import "./BackButton.css";

const Button = () => {
    return(
        <div className="button-container">
            <Link to="/">
                <button className="button">
                    <span className="button-text">Back</span>
                </button>
            </Link>
        </div>
    )
}

export default Button