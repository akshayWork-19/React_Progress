import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config.js"
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from 'react-redux';

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userDate = useSelector((state) => state.auth.userData);
  const isAuthor = post && userDate ? post.userId === userDate.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getDocument(slug)
        .then((post) => {
          if (post) setPost(post);
          else navigate('/');
        })
        .catch((error) => console.log("Appwrite Error :: GetPost-EditPost :: error", error.message))
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deleteDocument(post.$id)
      .then((status) => {
        if (status) {
          appwriteService.deleteFile(post.featuredImage)
        }
      })
      .catch((error) => console.log("Appwrite Error :: GetPost-EditPost :: error", error.message))
  }
  return post ? (

    // Deep dark background for the whole page
    <div className="py-20 min-h-screen bg-gray-900 text-gray-200">
      <Container>
        {/* Post title */}
        <div className="w-full mb-10 pb-4 border-b border-gray-700">
          <h1 className="text-5xl font-extrabold text-center text-indigo-400 tracking-tight">
            {post.title}
          </h1>
        </div>

        {/* Featured Image and Action Buttons Container */}
        <div className="w-full flex justify-center mb-10 relative border border-gray-800 rounded-xl overflow-hidden p-2 bg-gray-800 shadow-2xl">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            // Image styles: slightly larger and smoother rounded corners
            className="rounded-lg w-full max-h-[500px] object-cover transition-transform duration-500 ease-in-out hover:scale-[1.01]"
          />

          {isAuthor && (
            // Button styles: sleek, high-contrast positioning
            <div className="absolute right-8 top-8 space-x-4">
              <Link to={`/edit-post/${post.$id}`}>
                {/* Edit Button: Primary accent color */}
                <Button
                  bgColor="bg-indigo-600 hover:bg-indigo-700"
                  className="mr-0 font-medium px-4 py-2 rounded-lg"
                >
                  Edit
                </Button>
              </Link>
              {/* Delete Button: Warning color */}
              <Button
                bgColor="bg-red-600 hover:bg-red-700"
                className="font-medium px-4 py-2 rounded-lg"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Post Content */}
        <div className="browser-css text-lg leading-relaxed text-gray-300 bg-gray-900 p-0">
          {parse(post.content)}
        </div>

      </Container>
    </div>
  ) : (
    <div className="w-full py-40 min-h-screen bg-gray-900 flex justify-center items-center">
      <p className="text-xl text-gray-500 font-semibold">Loading post...</p>
    </div>
  );
}

export default Post