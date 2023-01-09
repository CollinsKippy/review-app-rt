import { useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import Title from './components/Title';
import ReviewData from './data/ReviewData';

function App() {
  const [reviews, setReviews] = useState(ReviewData);

  const onAddReview = ({ comment, rating }) => {
    const newReview = {
      id: Math.floor(Math.random() * 1000 + 1),
      comment,
      rating,
    };

    console.log(newReview);

    setReviews([newReview, ...reviews]);
  };

  return (
    <div className='my-container'>
      <Title />
      <ReviewForm onAddReview={onAddReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
