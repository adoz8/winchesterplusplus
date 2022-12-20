import React from "react";
import "./CatP.css"
import Cat1 from "./CatPics/Cat1.JPG"
import Cat2 from "./CatPics/Cat2.JPG"
import Cat3 from "./CatPics/Cat3.JPG"
import Cat4 from "./CatPics/Cat4.jpg"
import Cat5 from "./CatPics/Cat5.jpg"
import Cat6 from "./CatPics/Cat6.jpg"
import Cat7 from "./CatPics/Cat7.jpg"
import Cat8 from "./CatPics/Cat8.jpg"
import Cat9 from "./CatPics/Cat9.jpg"
import Cat10 from "./CatPics/Cat10.jpg"
import Cat11 from "./CatPics/Cat11.jpg"
import Cat12 from "./CatPics/Cat12.jpg"


const Cattography = () => {
    return(
        <div class="catt">
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

export default Cattography;