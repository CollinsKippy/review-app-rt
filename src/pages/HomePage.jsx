import React from 'react';
import { useState } from 'react';
import ReviewData from '../data/ReviewData';
import { v4 as uuidv4 } from 'uuid';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import ReviewStats from '../components/ReviewStats';
import Title from '../components/Title';
import AboutIconLink from '../components/AboutIconLink';

function HomePage() {
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
    <>
      <Title />
      <ReviewForm
        onAddReview={onAddReview}
        reviewForEdit={reviewForEdit}
        updated={updated}
      />
      <ReviewStats reviews={reviews} />
      <ReviewList reviews={reviews} onDelete={onDelete} onEdit={onEdit} />
      <AboutIconLink />
    </>
  );
}

export default HomePage;
