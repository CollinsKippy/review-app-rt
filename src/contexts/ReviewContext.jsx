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
    try {
      const res = await fetch(`/reviews?_sort=id&_order=desc`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setReviews(data);
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };

  // 2. POST Review
  const postReview = async (review) => {
    let savedData = null;
    try {
      const res = await fetch('/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      savedData = await res.json();
    } catch (error) {
      console.log({ error });
    }
    return savedData;
  };

  // DELETE Review
  const deleteReview = async (id) => {
    try {
      const res = await fetch(`/reviews/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return res?.ok;
    } catch (error) {
      console.log({ error });
      return false;
    }
  };

  ////////////////// FUNCTION HANDLERS ////////////////////
  const handleRatingSelected = (rating) => {
    setRating(rating);
  };

  const handleAdd = async ({ comment, rating }) => {
    const newReview = {
      comment,
      rating,
    };

    const data = await postReview(newReview);

    if (data) {
      setReviews((prevReviews) => [data, ...prevReviews]);
      setRating(null);
      setEditableObject((_) => null);
    }
  };

  const handleDelete = async (id) => {
    const isDeleted = await deleteReview(id);

    if (isDeleted) {
      setReviews((prevReviews) => [
        ...prevReviews.filter((review) => review.id !== id),
      ]);
    }
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
