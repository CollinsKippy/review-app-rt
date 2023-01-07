import { useState } from 'react';

function ReviewForm(props) {
  const { onAddReview } = props;

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [hasError, setHasError] = useState(false);

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (!comment || !rating) {
      setHasError(true);
    } else {
      onAddReview({ comment, rating });
      setComment('');
      setRating(8);
    }
  };

  return (
    <>
      <h2>Your Review</h2>
      <form onSubmit={onSubmit}>
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
            onChange={(e) => setRating(1)}
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
            onChange={(e) => setRating(2)}
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
            onChange={(e) => setRating(3)}
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
            onChange={(e) => setRating(4)}
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
            onChange={(e) => setRating(5)}
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
            onChange={(e) => setRating(6)}
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
            onChange={(e) => setRating(7)}
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
            onChange={(e) => setRating(8)}
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
            onChange={(e) => setRating(9)}
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
            onChange={(e) => setRating(10)}
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

        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </>
  );
}

export default ReviewForm;
