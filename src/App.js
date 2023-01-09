import { useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import ReviewStats from './components/ReviewStats';
import Title from './components/Title';
import ReviewData from './data/ReviewData';

function App() {
  const [reviews, setReviews] = useState(ReviewData);
  const [reviewForEdit, setReviewForEdit] = useState();

  const onAddReview = ({ comment, rating }) => {
    const newReview = {
      id: Math.floor(Math.random() * 1000 + 1),
      comment,
      rating,
    };

    setReviews([newReview, ...reviews]);
  };

  const onDelete = (id) => {
    setReviews([...reviews.filter((review) => review.id !== id)]);
  };

  const onEdit = (id) => {
    const review = reviews.find((review) => review.id === id);

    setReviewForEdit({...reviewForEdit,
      review,
      updated: false,
    });
  };

  return (
    <div className='my-container'>
      <Title />
      <ReviewForm onAddReview={onAddReview} reviewForEdit={reviewForEdit} />
      <ReviewStats reviews={reviews} />
      <ReviewList reviews={reviews} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
