import React from "react";
import "./growingflower.css";

const GrowingFlower = () => {
    return(
        <div id="position" class="sunflower">
        <div class="flowerhead">
            <div id="eye-1" class="eye"></div>
            <div id="eye-2" class="eye"></div>
            <div class="mouth"></div>
        </div>
        <div class="petals"></div>
        <div class="trunk">
            <div class="left-branch"></div>
            <div class="right-branch"></div>
        </div>
        <div class="vase"></div>
    </div>
    )
}

export default GrowingFlower