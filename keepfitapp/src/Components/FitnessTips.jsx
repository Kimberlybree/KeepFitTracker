import React from 'react';
import Card from 'react-bootstrap/Card';
// import Iframe from 'react-iframe';


const FitnessTips = () => {

const quoteOfTheDay = [
['Aim to be better than you were yesterday'],
['quote here random'], 
['quote3'],
['quote4'],
]

let randomQuote = quoteOfTheDay[0].sort(() => Math.random() * quoteOfTheDay);

for (let i = 0; i > randomQuote; i++) {
  
}

// let randomQuote = quoteOfTheDay => {
//   for(let i = quoteOfTheDay.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i +1));
//     const temp = quoteOfTheDay[i]
//     quoteOfTheDay[i] = quoteOfTheDay[j];
//     quoteOfTheDay[j] = temp;
//   }
// }



// let randomQuote = Math.floor(Math.random() * quoteOfTheDay.length);

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
  </div>

  
  );
}


export default FitnessTips;