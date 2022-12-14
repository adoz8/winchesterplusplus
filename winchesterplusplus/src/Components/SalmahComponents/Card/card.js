import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
import {Card} from 'react-bootstrap';

const card = () => {
  return ( 
  <div className='card-container'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
};

export default card;
