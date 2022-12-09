import React from "react";
import './button.css';
import Cat from "./Cat.jpg"
const Button = () => {
    return(
        <div class="container">
            <div>
            <h1>Cat</h1>
            <img calss = "ct" alt="Cat" src ={Cat}/>
            </div>
        </div>
    )
}

export default Button;