import { useEffect, useState } from 'react';
import RatingSelect from './RatingSelect';
import { motion } from 'framer-motion';

function ReviewForm(props) {
  const { onAddReview, updated } = props;

  const [comment, setComment] = useState('');
  const [hasError, setHasError] = useState(false);
  const [rating, setRating] = useState(null);

  /**
   * Handler called by RatingSelect component
   * @param {number} rating Experience Rating
   */
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
        <RatingSelect onRatingSelected={onRatingSelected} updated={updated} />
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
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className='alert alert-danger'
          >
            Please complete the fields above.
          </motion.p>
        )}

        <button type='submit' className='btn btn-primary w-50 shadow'>
          Submit Comment
        </button>
      </form>
    </>
  );
}

export default ReviewForm;
