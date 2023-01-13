import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';

function Review(props) {
  const { review, onDelete, onEdit } = props;

  return (
    <div className='review-item bg-secondary shadow-sm'>
      <span className='rating'>
        <span>{review.rating}</span>
      </span>
      <p className='comment'>{review.comment}</p>

      <div className='btn-group ms-auto'>
        <button
          className='btn btn-outline-secondary'
          onClick={() => onDelete(review.id)}
        >
          <FaTimes />
        </button>
        <button className='btn btn-outline-secondary' onClick={() => onEdit(review.id)}>
          <FaEdit />
        </button>
      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string,
    comment: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default Review;
