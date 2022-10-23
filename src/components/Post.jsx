import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import postService from '../features/postService';

const Post = ({ data, setPosts }) => {
  const removePost = (id) => {
    setPosts((prevState) => prevState.filter((thisPost) => thisPost.id !== id));
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>{' '}
          <Card.Subtitle className="mb-2 text-muted">
            By {data.author}
          </Card.Subtitle>
          <Card.Text className="text-truncate">{data.text}</Card.Text>
          <div className="d-flex justify-content-evenly">
            <Button as={Link} to={`post/${data.id}`} variant="primary">
              Edit
            </Button>
            <Button
              onClick={() => {
                postService.deletePost(data.id);
                removePost(data.id);
              }}
              variant="danger"
            >
              Delete
            </Button>
          </div>
        </Card.Body>
        <Card.Footer
          style={{ textAlign: 'right' }}
          className="d-flex justify-content-around text-muted"
        >
          Date: {data.date_formatted}
          <span>{data.published ? 'Published' : 'Not published'}</span>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Post;
