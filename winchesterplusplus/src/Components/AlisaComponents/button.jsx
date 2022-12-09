import React from "react";
import './button.css';
import Cat from "./Cat.jpg"
const Button = () => {
    return(
        <div class="container">
            <h1>Cat</h1>
            <img alt="Cat" src ={Cat}/>
        </div>
    )
}

export default Button;