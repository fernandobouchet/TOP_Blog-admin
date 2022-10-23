import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import postService from '../features/postService';
import { Container } from 'react-bootstrap';
import Comment from '../components/Comment';
import Loading from '../components/Loading';
import Divider from '../components/Divider';
import PostForm from '../components/PostForm';

const Post = () => {
  const { id } = useParams();

  const [post, setPostData] = useState();

  useEffect(() => {
    postService.getPostById(id).then((post) => {
      setTimeout(() => {
        setPostData(post);
      }, 500);
    });
  }, []);

  return (
    <>
      {post ? (
        <Container style={{ flex: '1' }}>
          <Container className="text-center">
            <PostForm post={post} />
          </Container>
          <Divider />
          <Container className="text-center">
            <h5>Comments ({post.messages.length}):</h5>
            {post.messages.map((comment, index) => (
              <Comment
                key={comment.id || index}
                comment={comment}
                setPostData={setPostData}
              />
            ))}
          </Container>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Post;
