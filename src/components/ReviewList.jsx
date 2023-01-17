import Review from './Review';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import ReviewContext from '../contexts/ReviewContext';

export function ReviewList(props) {
  const { onEdit } = props;
  const { reviews } = useContext(ReviewContext);

  if (reviews?.length === 0) {
    return <h4 className='mt-5 bg-secondary p-4'>No reviews yet.</h4>;
  }

  return (
    <div className='reviews'>
      <h2>Previous Reviews</h2>
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, scale: 0.98, x: -30, y: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        >
          <Review review={review} key={review.id} onEdit={onEdit} />
        </motion.div>
      ))}
    </div>
  );
}

export default ReviewList;
