import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ContactPage() {
  const { id } = useParams();

  return (
    <div className='card mb-5 p-5'>
      <h2>Contact Page</h2>
      <p>This is a sample Contact Page with ID: {id}</p>
      <p>Version: 1.0.0</p>
      <Link className='d-block mb-4' to='/'>
        Back to Home Page
      </Link>
      <small>&copy; 2023</small>
    </div>
  );
}

export default ContactPage;
