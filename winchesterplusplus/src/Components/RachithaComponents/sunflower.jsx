import React from "react";
import { Link } from "react-router-dom";
import "./css/sunflower.css";

const Sunflower2 = () =>
{
    return (
		<Link to= "/rachitha">
        <div id="position" class="sunflower">
        	<div class="head">
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
		</Link>
    )

}
export default Sunflower2;