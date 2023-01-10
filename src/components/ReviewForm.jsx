import { useState } from 'react';

function ReviewForm(props) {
  const { onAddReview, reviewForEdit } = props;

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(undefined);
  const [hasError, setHasError] = useState(false);

  const handleRatingSelected = (e) => {
    setRating(+e.target.value);
  };

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
        {/* Radiobuttons rating */}
        <div
          className='btn-group'
          role='group'
          aria-label='Basic radio toggle button group'
        >
          {/* 1 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating1'
            value='1'
            checked={rating === 1}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating1'>
            1
          </label>

          {/* 2 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating2'
            value='2'
            checked={rating === 2}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating2'>
            2
          </label>

          {/* 3 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating3'
            value='3'
            checked={rating === 3}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating3'>
            3
          </label>

          {/* 4 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating4'
            value='4'
            checked={rating === 4}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating4'>
            4
          </label>

          {/* 5 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating5'
            value='5'
            checked={rating === 5}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating5'>
            5
          </label>

          {/* 6 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating6'
            value='6'
            checked={rating === 6}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating6'>
            6
          </label>

          {/* 7 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating7'
            value='7'
            checked={rating === 7}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating7'>
            7
          </label>

          {/* 8 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating8'
            value='8'
            checked={rating === 8}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating8'>
            8
          </label>

          {/* 9 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating9'
            value='9'
            checked={rating === 9}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating9'>
            9
          </label>

          {/* 10 */}
          <input
            className='btn-check'
            type='radio'
            name='rating'
            id='rating10'
            value='10'
            checked={rating === 10}
            onChange={handleRatingSelected}
          />
          <label className='btn btn-outline-primary' htmlFor='rating10'>
            10
          </label>
        </div>

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
