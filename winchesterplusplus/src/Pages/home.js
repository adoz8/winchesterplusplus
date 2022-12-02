import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            <Link to="/alisa">Alisa's page</Link>
            <br/>
            <Link to="/byron">Byron's page</Link>
            <br/>
            <Link to="/rachitha">Rachitha's page</Link>
            <br/>
            <Link to="/salmah">Salmah's page</Link>
        </div>
    )
}

export default Home