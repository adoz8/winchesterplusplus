import React from "react";
import "./ArtP.css"
import Cat1 from "./ArtPics/Art1.png"
import Cat2 from "./ArtPics/Art2.png"
import Cat3 from "./ArtPics/Art3.jpg"
import Cat4 from "./ArtPics/Art4.jpg"
import Cat5 from "./ArtPics/Art5.JPEG"
import Cat6 from "./ArtPics/Art6.JPEG"
import Cat7 from "./ArtPics/Art7.JPG"
import Cat8 from "./ArtPics/Art8.JPG"
import Cat10 from "./ArtPics/Art9.JPG"
import Cat11 from "./ArtPics/Art10.PNG"



const Arttography = () => {
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
            </div>

        </div>
    )
}

export default Arttography;