import React from "react";
import ReactDOM from "react-dom"
import Name from "../Components/RachithaComponents/name";
import button2 from "../Components/RachithaComponents/happy";
import Flower from "../Components/RachithaComponents/flower2";

import "../Components/RachithaComponents/css/style.css";
import Happy from "../Components/RachithaComponents/happy";
import Potty from "../Components/RachithaComponents/potplant";
import Rachiname from "../Components/RachithaComponents/name";


const Rachitha = () => {
    return(
         <div className="gradient-animation">
            <Happy/>
            <Rachiname/>
            <Flower/>

         </div>
    );
 }

 export default Rachitha;