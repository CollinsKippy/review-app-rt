import { useContext, useEffect, useState } from 'react';
import RatingSelect from './RatingSelect';
import { motion } from 'framer-motion';
import ReviewContext from '../contexts/ReviewContext';

function ReviewForm() {
  const { rating, editableObject, onAddReview, onUpdateCompleted } =
    useContext(ReviewContext);
  const [comment, setComment] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  useEffect(() => {
    if (editableObject) {
      console.log({ editableObject });
      setHasError(false);
      setComment((_) => editableObject?.review?.comment);
      setIsBeingEdited(true);
    }
  }, [editableObject]);

  /**
   * Submit Form
   * @param {Event} evt Event
   */
  const onSubmit = (evt) => {
    evt.preventDefault();

    console.log(comment);
    console.log(rating);

    if (!comment || !rating) {
      setHasError(true);
      return;
    } else {
      setHasError(false);

      if (isBeingEdited) {
        onUpdateCompleted({
          id: editableObject?.review?.id,
          comment,
          rating,
        });
      } else {
        onAddReview({ comment, rating });
      }
      setComment('');
      setIsBeingEdited(false);
    }
  };

  return (
    <>
      <h2 className='mb-4'>Your Review</h2>
      <form onSubmit={onSubmit} className='d-flex flex-column gap-2'>
        <RatingSelect />
        <label htmlFor='comment' className='mt-2'>
          Your remarks:
        </label>
        <textarea
          type='text'
          rows={3}
          className='form-control'
          placeholder='Write your remarks here...'
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
