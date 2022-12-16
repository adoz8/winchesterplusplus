import React from 'react';
import { Link } from "react-router-dom";
import "./SpinningSun.css";

function SpinningSun() {
  return (
    <Link to ="/salmah">
        <div>
            <img src={require("./sun.svg")} className='SpinningSun'></img>
        </div>
    </Link>
  )
}

export default SpinningSun;