import React from "react";
import "../Components/ByronComponents/main.css";
import Introduction from "../Components/ByronComponents/introduction/introduction"
import NavBar from "../Components/ByronComponents/navbar/navbar"

const Byron = () => {
    return(
        <div className="page">
            <NavBar/>
            <Introduction/>
        </div>
    )
}

export default Byron;