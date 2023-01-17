import React from 'react';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import ReviewStats from '../components/ReviewStats';
import Title from '../components/Title';
import AboutIconLink from '../components/AboutIconLink';
import { ReviewProvider } from '../contexts/ReviewContext';

function HomePage() {
  return (
    <ReviewProvider>
      <Title />
      <ReviewForm />
      <ReviewStats />
      <ReviewList />
      <AboutIconLink />
    </ReviewProvider>
  );
}

export default HomePage;
