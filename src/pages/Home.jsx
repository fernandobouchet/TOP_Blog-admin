import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../components/Loading';
import Post from '../components/Post';
import postService from '../features/postService';

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    postService.getPosts().then((posts) => {
      setTimeout(() => setPosts(posts), 500);
    });
  }, []);

  return (
    <>
      {posts ? (
        <Container style={{ flex: '1' }} className={'mx-auto my-5'}>
          <Row xs={1} md={2} className="g-4">
            {posts.map((post) => (
              <Col key={post.id}>
                <Post data={post} setPosts={setPosts} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
