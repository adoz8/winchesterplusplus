import React from "react";
import './button.css';
import Cat from "./Cat.jpg"
import Art from "./art.png"
import Games from "./games.jpg"
import Arch from "./Arch2.jpg"
const Catton = () => {
    return(
        <div class="button_container">
            <div>
                <a href="https://www.w3schools.com/Css/css_link.asp"><img class = "ct" alt="Architecture"src={Arch} /></a>
            </div>
            <div><a href="https://www.w3schools.com/Css/css_link.asp"><img class = "ct" alt="Art"src={Art} /></a>
            </div>
            <div><a href="https://www.w3schools.com/Css/css_link.asp"><img class = "ct" alt="Games"src={Games} /></a>
            </div>
            <div><a href="https://www.w3schools.com/Css/css_link.asp"><img class = "ct" alt="Cat"src={Cat} /></a>
            </div>
        </div>
    )
}

export default Catton;