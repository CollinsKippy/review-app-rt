import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
  return (
    <div className='mt-5 d-flex justify-content-end text-primary'>
      <Link to={{ pathname: '/about', search: '?sort=name', hash: '#segment1' }}>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
