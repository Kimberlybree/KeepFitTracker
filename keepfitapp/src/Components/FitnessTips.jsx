import React from 'react';
import Card from 'react-bootstrap/Card';
import Video from './Video';


const quoteOfTheDay = [
  ['Aim to be better than you were yesterday'],
  ['quote here random'], 
  ['quote3'],
  ['quote4'],
  ];




const FitnessTips = () => {


let randomQuote = quoteOfTheDay[0].sort(() => Math.random() * quoteOfTheDay);


  return ( 


    <div className="quotes">
    <Card>
      <Card.Header></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
          {' '}
          {randomQuote}
          
    
          </p>
          <footer className="blockquote-footer">
            Gym Motivation <cite title="Source Title">Zazzle.com</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>




    <Video />
  </div>

  
  );
}


export default FitnessTips;