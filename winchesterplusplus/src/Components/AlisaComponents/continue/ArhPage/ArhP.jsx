import React from "react";
import "./Arh.css"
import Cat1 from "./ArhPics/Arh1.png"
import Cat2 from "./ArhPics/Arh2.jpg"
import Cat3 from "./ArhPics/Arh3.jpg"
import Cat4 from "./ArhPics/Arh4.png"
import Cat5 from "./ArhPics/Arh5.png"
import Cat6 from "./ArhPics/Arh6.png"
import Cat7 from "./ArhPics/Arh7.png"
import Cat8 from "./ArhPics/Arh8.png"
import Cat10 from "./ArhPics/Arh9.png"
import Cat11 from "./ArhPics/Arh10.png"
import Cat12 from "./ArhPics/Arh11.png"
import Cat13 from "./ArhPics/Arh12.png"





const Arhtography = () => {
    return(
        <div class="arhh">
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
                <img class = "ct" alt="Cat"src={Cat13} />
            </div>

        </div>
    )
}

export default Arhtography;