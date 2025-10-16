import React from 'react'
import AppwriteService from '../appwrite/config'
import { Link } from 'react-router-dom';


function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      {/* Card container: Dark background (gray-800), subtle border, generous padding, and a smooth hover effect */}
      <div className='w-full bg-gray-800 rounded-xl p-4 transition-transform duration-300 ease-in-out hover:scale-[1.03] border border-gray-700 hover:border-indigo-500 shadow-xl'>
        {/* Image container: Centered and adds slight padding around the image */}
        <div className='w-full justify-center mb-4'>
          <img
            src={AppwriteService.getFilePreview(featuredImage)}
            alt={title}
            // Image styling: Rounded corners, ensures it fills the width, and is slightly elevated
            className='rounded-lg w-full h-48 object-cover shadow-lg'
          />
        </div>
        {/* Title: Bold, large text with light color for high contrast */}
        <h2 className='text-xl font-bold text-gray-100 hover:text-indigo-400 transition-colors duration-200'>
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard;