import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

   

const GoalList = (props) => {
  const [keepfits, setKeepFits] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/keepfits/')
    .then((res) => res.json())
    .then(res => {
      setKeepFits(res)
      console.log(res)

    })}, []);

return (

keepfits.map((item) => {


return (

  <div>
     
      {/* {item.title}
      {item.goal_description} */}
    
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Goal Description</Form.Label>
            <Form.Control type="email" placeholder="What is your goal?"
            value={" "} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Goal Description</Form.Label>
            <Form.Control type="password" placeholder="Describe your goal"
            value={""}
            />
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form> 



  

 

  </div>
  )
}))
}
export default GoalList;


