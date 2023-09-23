import React, { useState } from 'react'
import restaurant from './dummydata';
import { useParams } from 'react-router-dom';

const BookRestaurant = () => {

  const {index} = useParams();
  const [restroData, setRestroData] = useState(restaurant[index]);

  return (
    <div>
      {
        restroData.dishes.map(dish => (
          <div>
            <h3>{dish.name}</h3>
          </div>
        ))
      }
     
    </div>
    
  )
}

export default BookRestaurant;