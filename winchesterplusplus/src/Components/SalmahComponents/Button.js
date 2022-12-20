import { Link } from "react-router-dom";
import React from 'react';
import './Button.css';


function Button() {
  return (
    <div>
        <Link to="/">
            <button className="Button">Back</button>
        </Link>
    </div>
  );
}

export default Button;