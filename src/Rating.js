import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
const Rating = (props) => {    
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={props.count}
        />
      </div>
    );
  }
export default Rating