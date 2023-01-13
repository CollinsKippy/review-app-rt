import PropTypes from 'prop-types';
import Review from './Review';
import { motion } from 'framer-motion';

export function ReviewList(props) {
  const { reviews, onDelete, onEdit } = props;

  if (!reviews || reviews.length === 0) {
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
          <Review
            review={review}
            key={review.id}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </motion.div>
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      comment: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default ReviewList;
