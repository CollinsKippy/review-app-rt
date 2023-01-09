import React from 'react';

function ReviewStats(props) {
  const { reviews } = props;

  let average =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className='mt-5 mb-2 d-flex justify-content-between'>
      <h4>{reviews.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1)}</h4>
    </div>
  );
}

export default ReviewStats;
