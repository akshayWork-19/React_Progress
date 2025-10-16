import React from 'react'

function Container({ children }) {
  // Increased max-w to 8xl for a more spacious, modern feel, and added horizontal padding (px-6) for responsiveness on smaller screens.
  return <div className='w-full mx-auto max-w-8xl px-6'>{children}</div>;

}

export default Container