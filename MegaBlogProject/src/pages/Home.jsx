import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from 'react-redux';

function Home() {
  const [posts, setPosts] = useState([]);
  const userState = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService.listDocuments()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      }, [])
      .catch((error) => console.log("Appwrite Error :: Home-getPosts :: error", error.message))
  })

  if (posts.length === 0 && !userState) {
    return (
      // CSS for seamless empty state: Deep dark background, centered, subtle elevation
      <div className="w-full py-24 min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              {/* Blended container, using border for subtle definition instead of shadow */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 text-center transition duration-300 hover:border-indigo-500">
                <h1 className="text-4xl font-extrabold text-white tracking-wider">
                  Login to read posts
                </h1>
                <p className="text-xl text-gray-400 mt-4">
                  Or create an account to start sharing your thoughts!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    // CSS for posts display: Deep dark background, generous padding
    <div className='w-full py-20 min-h-screen bg-gray-900 text-white'>
      <Container>
        {/* Title section made seamless with the background */}
        <div className="bg-gray-900 pb-12">
          <h1 className="text-5xl font-extrabold text-indigo-400 text-center tracking-wider uppercase">
            Latest Posts
          </h1>
          <p className="text-center text-lg text-gray-400 mt-2">Discover what's new in our community.</p>
        </div>

        {/* Post grid */}
        <div className='flex flex-wrap -m-4'>
          {posts.map((post) => (
            // Responsive card spacing
            <div key={post.$id} className='p-4 sm:w-1/2 lg:w-1/3 xl:w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home;