import React from 'react'

function Logo({ width = "180px" }) {
  return (
    // Uses a flex container to combine two text styles for a modern logo effect
    <div style={{ width }} className='flex items-end'>
      <span className='text-3xl **font-light** text-indigo-500 tracking-tight'>
        Blog
      </span>
      <span className='text-2xl **font-black** text-gray-400 tracking-wider ml-1'>
        Junction
      </span>
    </div>
  )
}

export default Logo