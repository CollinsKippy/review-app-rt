import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import ReviewStats from './components/ReviewStats';
import Title from './components/Title';
import ReviewData from './data/ReviewData';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';

function App() {
  const [reviews, setReviews] = useState(ReviewData);
  const [reviewForEdit, setReviewForEdit] = useState();
  const [updated, setUpdated] = useState(false);

  const onAddReview = ({ comment, rating }) => {
    const newReview = {
      id: uuidv4(),
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
    <Router>
      <div className='my-container'>
        <Navbar />

        <Routes>
          <Route
            index
            path='/'
            element={
              <>
                <Title />
                <ReviewForm
                  onAddReview={onAddReview}
                  reviewForEdit={reviewForEdit}
                  updated={updated}
                />
                <ReviewStats reviews={reviews} />
                <ReviewList
                  reviews={reviews}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
                <AboutIconLink />
              </>
            }
          ></Route>

          <Route path='/about' element={<AboutPage />} id='aboutId' />
          <Route path='/contact/:id' element={<ContactPage />} id='contactId' />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
