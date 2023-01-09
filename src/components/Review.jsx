import PropTypes from 'prop-types';

function Review(props) {
  const { review } = props;

  return (
    <div className='review-item bg-secondary shadow-sm'>
      <h4 className='rating'>
        <span>{review.rating}</span>
      </h4>
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
