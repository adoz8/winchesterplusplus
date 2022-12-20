import React from "react";
import "./ArtP.css"
import Cat1 from "./GamesPics/Game1.jfif"
import Cat2 from "./GamesPics/Game2.png"
import Cat3 from"./GamesPics/Game3.jfif"
import Cat4 from "./GamesPics/Game4.jfif"
import Cat5 from "./GamesPics/Game5.jfif"
import Cat6 from "./GamesPics/Game6.webp"
import Cat7 from "./GamesPics/Game7.jfif"
import Cat8 from "./GamesPics/Game8.jpg"
import Cat10 from "./GamesPics/Game9.jpg"
import Cat11 from "./GamesPics/Game10.jpg"
import Cat12 from "./GamesPics/Game11.jpg"






const Gameography = () => {
    return(
        <div class="artt">
            <div>
                <img class = "ct" alt="Architecture"src={Cat1} />
                <img class = "ct" alt="Art"src={Cat2} />
                <img class = "ct" alt="Games"src={Cat3} />
                <img class = "ct" alt="Cat"src={Cat4} />
                <img class = "ct" alt="Cat"src={Cat5} />
                <img class = "ct" alt="Cat"src={Cat6} />
                <img class = "ct" alt="Cat"src={Cat7} />
                <img class = "ct" alt="Cat"src={Cat8} />
                {/* <img class = "ct" alt="Cat"src={Cat9} /> */}
                <img class = "ct" alt="Cat"src={Cat10} />
                <img class = "ct" alt="Cat"src={Cat11} />
                <img class = "ct" alt="Cat"src={Cat12} />
            </div>

        </div>
    )
}

export default Gameography;