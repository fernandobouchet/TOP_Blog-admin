import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loading from '../components/Loading';
import Post from '../components/Post';
import postService from '../features/postService';

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    postService.getPosts().then((posts) => {
      setPosts(posts);
    });
  }, [posts]);

  return (
    <>
      {posts ? (
        <Container style={{ flex: '1' }} className={'mx-auto my-5'}>
          <div className="d-flex justify-content-center mb-5">
            <Button as={Link} to={'/post'}>
              New post
            </Button>
          </div>
          <Row xs={1} md={3} className="g-4">
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
