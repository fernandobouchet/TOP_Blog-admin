import { Container, Row, Col } from 'react-bootstrap';
import Post from '../components/Post';

const Home = ({ posts }) => {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {posts.map((post) => (
          <Col key={post._id}>
            <Post data={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
