/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import '../Components/SalmahComponents/MainStyleSheet.css';

import Button from "../Components/SalmahComponents/BackButton/BackButton";
import TypeAnimation from "../Components/SalmahComponents/TypeAnimation/TypeAnimation";
import ColourSwitcher from "../Components/SalmahComponents/ColourSwitch/colour-switch";
import Card from "../Components/SalmahComponents/Card/card";

const Salmah = () => {
    return(
        <div className="SalmahPage">
            <div className="Intro">
                <Button />
                <ColourSwitcher />
                <TypeAnimation /> 
            </div>
            <div className="InfoCards">
                <Card
                title = "Born in Australia"
                imageURL = "https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fwww.state.gov%2Fcountries-areas%2Faustralia%2F&psig=AOvVaw3xr6xtLgqH1FLYC-elA05W&ust=1671132582070000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKi8uJHs-fsCFQAAAAAdAAAAABAE"
                body = "I was born in Australia but only lived there for 6 months"
                />
                <Card
                title = "Nationality is Sri Lankan"
                imageURL = "https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fwww.travelnation.co.uk%2Fdestinations%2Fsri-lanka%2Fsri-lanka-travel-guide&psig=AOvVaw1GRbCk9UM1F5jGPTxbcPDa&ust=1671132656539000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjE-LTs-fsCFQAAAAAdAAAAABAE"
                body = "My nationality is Sri Lankan, but I 'act' like the least Sri Lankan in my family"
                />
                <Card
                title= "Lived in the UK for 16 years"
                imageURL ="https://www.whereig.com/united-kingdom/maps/leicester-location-map.jpg"
                body= "I have lived in Reading and live in Leicester - East Midlands"
                />
            </div>
        </div>
    )
}

export default Salmah;