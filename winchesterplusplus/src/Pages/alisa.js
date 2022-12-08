import React from "react";
import Head from "../Components/AlisaComponents/head";
import CatHands from "https://s3-us-west-2.amazonaws.com/s.cdpn.io/59639/bundle_copy.js";

const Alisa = () => {
    return(
        <div>
            <h1>Alisa's page</h1>
            <div>
                <Head/>
                CatHands.start(document.body, {'Click & Hold'
                });
            </div>
        </div>
        
    )
}

export default Alisa;