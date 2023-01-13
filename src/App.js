import { useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import ReviewStats from './components/ReviewStats';
import Title from './components/Title';
import ReviewData from './data/ReviewData';

function App() {
  const [reviews, setReviews] = useState(ReviewData);
  const [reviewForEdit, setReviewForEdit] = useState();
  const [updated, setUpdated] = useState(false);

  const onAddReview = ({ comment, rating }) => {
    setUpdated(false);

    const newReview = {
      id: Math.floor(Math.random() * 1000 + 1),
      comment,
      rating,
    };

    setReviews((reviews) => [newReview, ...reviews]);
    setUpdated(true);
  };

  const onDelete = (id) => {
    setReviews((reviews) => [...reviews.filter((review) => review.id !== id)]);
  };

  const onEdit = (id) => {
    const review = reviews.find((review) => review.id === id);

    setReviewForEdit({ ...reviewForEdit, review });
  };

  return (
    <div className='my-container'>
      <Title />
      <ReviewForm
        onAddReview={onAddReview}
        reviewForEdit={reviewForEdit}
        updated={updated}
      />
      <ReviewStats reviews={reviews} />
      <ReviewList reviews={reviews} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
