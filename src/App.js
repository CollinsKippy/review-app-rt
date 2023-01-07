import { useState } from 'react';
import ReviewList from './components/ReviewList';
import Title from './components/Title';

function App() {
  const [reviews, setReviews] = useState([
    { id: 1, comment: 'My Comment goes here', rating: 9.0 },
    { id: 2, comment: 'My Comment goes here', rating: 9.0 },
    { id: 3, comment: 'My Comment goes here', rating: 9.0 },
    { id: 4, comment: 'My Comment goes here', rating: 9.0 },
  ]);

  return (
    <div className='container'>
      <Title />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
