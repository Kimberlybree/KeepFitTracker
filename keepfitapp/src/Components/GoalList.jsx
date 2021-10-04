import React, { useState, useEffect } from 'react';

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
     
      {item.title}
      {item.goal_description} 
      
  </div>
  )
}))
}
export default GoalList;


