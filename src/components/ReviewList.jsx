import PropTypes from 'prop-types';
import Review from './Review';

export function ReviewList(props) {
  const { reviews } = props;

  return (
    <div className='reviews'>
      <h2>Previous Reviews</h2>
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
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
