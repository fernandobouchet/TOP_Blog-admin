import { Card, Button } from 'react-bootstrap';

const Post = ({ data }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button>Read post</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Post;
