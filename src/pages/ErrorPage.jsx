import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='card mb-5 p-5'>
      <h2>Error Page</h2>
      <p>This is a sample Error Page.</p>
      <p>Version: 1.0.0</p>
      <Link className='d-block mb-4' to='/'>
        Back to Home Page
      </Link>
      <small>&copy; 2023</small>
    </div>
  );
}

export default ErrorPage;
