import React, { useContext } from 'react';
import ReviewContext from '../contexts/ReviewContext';

function ReviewStats() {
  const { reviews } = useContext(ReviewContext);

  let average =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  average = average.toFixed(1);

  return (
    <div className='mt-5 mb-1 d-flex justify-content-between bg-tertiary text-primary'>
      <h4>{reviews.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default ReviewStats;
