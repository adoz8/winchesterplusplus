import React from "react";
import './button.css';
import Cat from "./Cat.jpg"
const Artton = () => {
    return(
        <div class="button_container">
            <div>
            {/* <h1>Cat</h1>
            <img class = "ct" alt="Cat" src ={Cat}/> */}
                <a href="https://www.w3schools.com/Css/css_link.asp"><img class = "ct" alt="Cat"src={Cat} /></a>
                <a href="https://www.w3schools.com/Css/css_link.asp"><img class = "ct" alt="Cat"src={Cat} /></a>
            </div>
        </div>
    )
}

export default Artton;