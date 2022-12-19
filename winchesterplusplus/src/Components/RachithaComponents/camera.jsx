import React from "react";
import "./css/camera.css";
import "./images/me.jpg";

const Camera2 = () =>
{
    return (
		<div class="container" tabIndex="0">

       <div class="photo" style="background-image:me.jpg"></div>

         <div class="shutter" style="--flaps: 6">

        <div class="flap" style="--i: 0"></div>
        <div class="flap" style="--i: 1"></div>
        <div class="flap" style="--i: 2"></div>
        <div class="flap" style="--i: 3"></div>
    <div class="flap" style="--i: 4"></div>
    <div class="flap" style="--i: 5"></div>

  </div>

</div>
    )

}
export default Camera2;