import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className='About mb-5 p-5'>
      <h2>About Page</h2>
      <p>This is a sample About Page</p>
      <p>Version: 1.0.0</p>
      <Link className='d-block mb-4' to='/'>Back to Home Page</Link>
      <small>&copy; 2023</small>
    </div>
  );
}
