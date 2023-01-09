import PropTypes from 'prop-types';
import Review from './Review';

export function ReviewList(props) {
  const { reviews, onDelete, onEdit } = props;

  if (!reviews || reviews.length === 0) {
    return <h4 className='mt-5 bg-secondary p-4'>No reviews yet.</h4>;
  }

  return (
    <div className='reviews'>
      <h2>Previous Reviews</h2>
      {reviews.map((review) => (
        <Review
          review={review}
          key={review.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      comment: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default ReviewList;
