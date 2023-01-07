import { useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import Title from './components/Title';

function App() {
  const [reviews, setReviews] = useState([
    { id: 1, comment: 'My Comment goes here', rating: 9.0 },
    { id: 2, comment: 'My Comment goes here', rating: 9.0 },
    { id: 3, comment: 'My Comment goes here', rating: 9.0 },
    { id: 4, comment: 'My Comment goes here', rating: 9.0 },
  ]);

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
