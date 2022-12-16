import React from "react";
import ReactDOM from "react-dom"
import Name from "../Components/RachithaComponents/name";
import button2 from "../Components/RachithaComponents/happy";
import Flower from "../Components/RachithaComponents/flower2";

import "../Components/RachithaComponents/css/style.css";
import Happy from "../Components/RachithaComponents/happy";
import Potty from "../Components/RachithaComponents/potplant";

// import NavBar from "../Components/ByronComponents/navbar/navbar";
// import About from "../Components/RachithaComponents/About";
// import Interesting from "../Components/RachithaComponents/Interesting";
// import NavBar from "../Components/RachithaComponents/Navbar";

// export default function App() {
//     return (
        
//     );
// }

const Rachitha = () => {
    return(
//     // <main className="text-gray-400 bg-gray-900 body-font">
//     // {/* <NavBar /> */}
//     //     <About />
//     //     <Interesting />
//     // </main>
         <div className="gradient-animation">
            <Happy/>
            {/* <Name/> */}
            {/* <Potty/> */}
            <Flower/>
         </div>
    );
 }

 export default Rachitha;