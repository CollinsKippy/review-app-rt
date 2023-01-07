import PropTypes from 'prop-types';

function Review(props) {
  const { review } = props;

  return (
    <div className='review-item'>
      <h4 className='rating'>
        <span>{review.rating}</span>
      </h4>
      <h4 className='comment'>{review.comment}</h4>
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
