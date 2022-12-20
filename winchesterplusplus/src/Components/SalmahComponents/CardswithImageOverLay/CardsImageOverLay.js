import Card from "react-bootstrap/Card";
import React from 'react';

function CardsImageOverLay() {
  return (
    <div>CardsImageOverLay
        <Card className="Australia">
            <Card.Img src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AEarth_Western_Hemisphere_transparent_background.png&psig=AOvVaw1XyEJw5sYM9yqKFC2v9Dq5&ust=1671618400277000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCICH__j9h_wCFQAAAAAdAAAAABAE" alt="Globe"></Card.Img>
            <Card.ImgOverlay>
                <Card.Title>Where am I From?</Card.Title>
                <Card.Text>
                    I am actually born in Australia but only lived there for about 6 months, I then moved back to Sri Lanka, and when I was 6 I moved to England and have been living here ever since. 
                    I used to live in Reading, not too far from the Bracknell Office. Proud to say, I am from Leicester, the city with the most diverse streets in the world.
                    To sum up, I was born in Australia, have Sri Lankan nationality but have lived in the UK for the past 17 years.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>   
    </div>
  )
}

export default CardsImageOverLay