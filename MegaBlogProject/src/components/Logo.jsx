import React from 'react'

function Logo({ width = "100px" }) {
  return (
    // Applied bold, large text with the accent color (indigo-400) on the dark background.
    <div
      className='text-3xl font-extrabold text-indigo-400 tracking-wider uppercase'
      style={{ width }} // This still allows the width prop to control the div's size
    >
      Logo
    </div>
  )
}

export default Logo