import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function Main(props) {
  return (
    <div className="mainPage">

<div className="carouselSizing">

<Carousel>
  <Carousel.Item>
      <img
      className="d-block w-100"
      src="https://www.planetfitness.com/sites/default/files/feature-image/xbreak-workout_602724.jpg.pagespeed.ic.v8byD7su-e.jpg"
      alt="First slide"
      />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Fitness Tips</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
      className="d-block w-100"
      src="https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png"
      alt="Second slide"
      />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="d-block w-100"
    src="https://media1.popsugar-assets.com/files/thumbor/gtewzm_6gJsNVl2Ex9xP2O9KF5M/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/16/731/n/1922729/85d1ce265d2dfc639070a3.22857928_/i/25-Minute-Total-Body-Strength-Workout.jpg"
    alt="Third slide"
    />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</div>



    </div>
  );
}

export default Main;

