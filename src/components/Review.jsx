import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function Review(props) {
  const { review } = props;

  return (
    <div className='review-item bg-secondary shadow-sm'>
      <span className='rating'>
        <span>{review.rating}</span>
      </span>
      <p className='comment'>{review.comment}</p>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    comment: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default Review;
