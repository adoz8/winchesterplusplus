import { Link } from "react-router-dom";

import React from 'react'

function Button() {
  return (
    <div>
        <Link to="/home">
            <button>Back</button>
        </Link>
    </div>
  );
}

export default Button;