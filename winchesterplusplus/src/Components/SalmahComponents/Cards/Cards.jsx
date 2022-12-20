import React from 'react';
import './Cards.css';

function Cards(props) {
  return (
    <div className='Card'>
        <div className='Card_body'>
            <img alt={props.altext} src={props.image} className="Card_image">
            </img>
            <h2 className='Card_title'>{props.title}</h2>
                <p className='Card_description'>{props.content}</p>
        </div>
    </div>
  )
}

export default Cards;