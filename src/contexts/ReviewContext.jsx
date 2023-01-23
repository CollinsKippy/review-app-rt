import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ReviewContext = createContext(null);
export default ReviewContext;

export function ReviewProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState();
  const [editableObject, setEditableObject] = useState();

  ////////////////////// REST /////////////////////
  // 1. GET Reviews
  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    const res = await fetch(
      `http://localhost:5000/reviews?_sort=id&_order=desc`
    );
    const data = await res.json();
    setReviews(data);
    setIsLoading(false);
  };

  ////////////////// FUNCTION HANDLERS ////////////////////
  const handleRatingSelected = (rating) => {
    setRating(rating);
  };

  const handleAdd = ({ comment, rating }) => {
    const newReview = {
      id: uuidv4(),
      comment,
      rating,
    };

    setReviews((reviews) => [newReview, ...reviews]);
    setRating(null);
    setEditableObject((_) => null);
  };

  const handleDelete = (id) => {
    setReviews((prevReviews) => [
      ...prevReviews.filter((review) => review.id !== id),
    ]);
  };

  const handleEdit = (id) => {
    const review = reviews.find((r) => r.id === id);
    if (review) {
      setEditableObject({ review, edited: false });
      setRating(review.rating);
    }
  };

  const handleUpdateCompleted = ({ id, comment, rating }) => {
    setReviews((prevReviews) => {
      return [
        ...prevReviews.map((rev) =>
          rev.id === id ? { ...rev, comment, rating } : rev
        ),
      ];
    });

    setEditableObject((_) => null);
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews: reviews,
        rating: rating,
        editableObject: editableObject,
        isLoading: isLoading,
        onDelete: handleDelete,
        onAddReview: handleAdd,
        onRatingSelected: handleRatingSelected,
        onEdit: handleEdit,
        onUpdateCompleted: handleUpdateCompleted,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}
