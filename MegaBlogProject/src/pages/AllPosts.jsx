import React, { useState, useEffect } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { }, []);
  appwriteService.listDocuments([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents)
    }
  })



  return (
    // Seamless dark background
    <div className='w-full py-20 min-h-screen bg-gray-900 text-white'>
      <Container>
        {/* Blended header section: lighter background (gray-800) but without strong shadow */}
        <div className="bg-gray-900 pt-0 pb-12">
          <h1 className="text-5xl font-extrabold text-center text-indigo-400 mb-4 tracking-wider uppercase">
            All Posts
          </h1>
          <p className="text-center text-lg text-gray-400">Browse through the latest and greatest posts from our community.</p>
        </div>

        {/* Conditional rendering for empty state */}
        {posts && posts.length > 0 ? (
          <div className='flex flex-wrap -m-4'>
            {posts?.map((post) => (
              <div key={post.$id} className='p-4 sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                {/* Assuming PostCard handles its own bold styling now */}
                <PostCard {...post} />
              </div>
            ))}
          </div>
        ) : (
          // Empty state blending into the dark background with subtle elevation
          <div className='flex justify-center items-center h-25 bg-gray-800 rounded-xl border border-gray-700 p-8 transition duration-300 hover:border-indigo-500'>
            <p className='text-2xl text-White font-semibold'>
              No posts available yet. Be the first to create one!
            </p>
          </div>
        )}
      </Container>
    </div>
  )
}

export default AllPosts