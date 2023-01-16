/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './ColourSwitch2.css';
//This is a hook that allows us to track state in a function component


function ColourSwitcher2() {
   const [active, setActive] = useState(false);

   const handleClick = () => {
       setActive(current => !current);
   };

   return (
       <div className="Name" onClick={handleClick} style={{ backgroundColor: active ? "#B9D9EB" : "", color: active? "#F0F8FF": " "}}>
           <h1>My Hobbies</h1>
       </div>
   );

}

export default ColourSwitcher2;