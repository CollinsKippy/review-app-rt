import React, { createContext, useState } from 'react';
import ReviewData from '../data/ReviewData';
import { v4 as uuidv4 } from 'uuid';

const ReviewContext = createContext(null);
export default ReviewContext;

export function ReviewProvider({ children }) {
  const [reviews, setReviews] = useState(ReviewData);
  const [rating, setRating] = useState();

  const onAddReview = ({ comment, rating }) => {
    const newReview = {
      id: uuidv4(),
      comment,
      rating,
    };

    setReviews((reviews) => [newReview, ...reviews]);
  };

  const onDelete = (id) => {
    setReviews((reviews) => [...reviews.filter((review) => review.id !== id)]);
  };

  const onRatingSelected = (rating) => {
    setRating(rating);
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews: reviews,
        rating: rating,
        onDelete: onDelete,
        onAddReview: onAddReview,
        onRatingSelected: onRatingSelected,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}
