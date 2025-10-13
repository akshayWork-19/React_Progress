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
      appwriteService.getPost(slug)
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
    <div>
      <Container>
        <PostForm post={post} />
      </Container>
    </div> : null;
}

export default Editpost