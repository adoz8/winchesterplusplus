import React from "react";
import { Link } from "react-router-dom";

function SpinningMoon() {
    return (
        <Link to ="/salmah">
            <svg className="SpinningSun"
            xmlns="http://www.w3.org/2000/svg"
            width="60mm"
            height="60mm"
            version="1.1"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            >
            <g>
                <path
                fill="#c9ffff"
                fillOpacity="1"
                stroke="none"
                strokeWidth="0.258"
                d="M26.605 52.636c-10.17-1.611-17.992-9.723-19.278-19.99-.844-6.745 1.657-13.919 6.565-18.826 9.51-9.511 25.545-8.629 33.922 1.867 8.453 10.591 5.95 26.15-5.388 33.484-3.535 2.286-7.149 3.415-11.49 3.588-1.56.062-3.51.007-4.33-.123z"
                ></path>
            </g>
            </svg>
        </Link>
      );
}

export default SpinningMoon;
