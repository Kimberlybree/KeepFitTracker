import React from 'react';
import Card from 'react-bootstrap/Card'


function FitnessTips(props) {
    return (
       
      <div className="fitnessTipsPage">
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Stay committed to being better than you were yesterday. {' '}
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