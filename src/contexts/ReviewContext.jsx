import React, { createContext } from 'react';

const ReviewContext = createContext(null);

export function ReviewProvider() {
  
  return <ReviewContext.Provider value={{

  }}>
    
  </ReviewContext.Provider>;
}

export default ReviewContext;
