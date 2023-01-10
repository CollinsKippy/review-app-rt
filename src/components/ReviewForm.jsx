import { useState } from 'react';
import RatingSelect from './RatingSelect';

function ReviewForm(props) {
  const { onAddReview } = props;

  const [comment, setComment] = useState('');
  const [hasError, setHasError] = useState(false);
  const [rating, setRating] = useState(10);

  const onRatingSelected = (rating) => {
    setRating(rating);
  };

  /**
   * Submit Form
   * @param {Event} evt Event
   */
  const onSubmit = (evt) => {
    evt.preventDefault();

    if (!comment || !rating) {
      setHasError(true);
    } else {
      setHasError(false);

      onAddReview({ comment, rating });
      setComment('');
      setRating(null);
    }
  };

  return (
    <>
      <h2 className='mb-4'>Your Review</h2>
      <form onSubmit={onSubmit} className='d-flex flex-column gap-4'>
        <RatingSelect onRatingSelected={onRatingSelected} />
        <textarea
          type='text'
          rows={3}
          className='form-control'
          placeholder='Write your review here...'
          name='comment'
          id='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        {hasError && (
          <p className='alert alert-danger'>
            Please complete the fields above.
          </p>
        )}

        <button type='submit' className='btn btn-primary w-50 shadow'>
          Submit Comment
        </button>
      </form>
    </>
  );
}

export default ReviewForm;
