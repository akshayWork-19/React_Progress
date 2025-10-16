import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';


function Editpost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getDocument(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          }
        })
        .catch((error) => console.log("Appwrite Error :: GetPost-EditPost :: error", error.message));
    } else {
      navigate('/')
    }
  }, [slug, navigate]);
  return post ?
    // Applied deep dark background (bg-gray-900) and generous top/bottom padding (py-12)
    <div className='w-full py-16 min-h-screen bg-gray-900'>
      <Container>
        {/* Added a title section for better context */}
        <div className="pb-10">
          <h1 className="text-5xl font-extrabold text-center text-indigo-400 tracking-wider uppercase">
            Edit Post
          </h1>
        </div>
        <PostForm post={post} />
      </Container>
    </div> :
    // Show a loading/placeholder state when post is null, ensuring dark background
    <div className="w-full py-40 min-h-screen bg-gray-900 flex justify-center items-center">
      <p className="text-xl text-gray-500 font-semibold">Loading post editor...</p>
    </div>;
}

export default Editpost