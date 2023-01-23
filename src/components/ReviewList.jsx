import Review from './Review';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import ReviewContext from '../contexts/ReviewContext';

export function ReviewList() {
  const { reviews, isLoading } = useContext(ReviewContext);

  if (reviews?.length === 0 && !isLoading) {
    return <h4 className='mt-5 bg-secondary p-4'>No reviews yet.</h4>;
  }

  return (
    <div className='reviews'>
      <h2>Previous Reviews</h2>
      {isLoading && (
        <>
          <p className='alert alert-primary'>Loading reviews...</p>
          <div className='progress'>
            <div
              className='progress-bar progress-bar-striped progress-bar-animated w-100'
              role='progressbar'
              aria-valuenow='100'
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          </div>
        </>
      )}
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, scale: 0.98, x: -30, y: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        >
          <Review review={review} key={review.id} />
        </motion.div>
      ))}
    </div>
  );
}

export default ReviewList;
