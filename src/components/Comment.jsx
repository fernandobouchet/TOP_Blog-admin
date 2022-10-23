import { Card, Button } from 'react-bootstrap';
import commentService from '../features/commentService';
import Divider from './Divider';

const Comment = ({ comment, setPostData }) => {
  const deleteComment = (id) => {
    setPostData((prevState) => ({
      ...prevState,
      messages: [...prevState.messages].filter((comment) => comment.id !== id),
    }));
  };

  return (
    <>
      <Card style={{ maxWidth: '25rem' }} className="mx-auto my-3 mw-50">
        <Card.Body>
          <div
            style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.175)' }}
            className="d-flex justify-content-between"
          >
            <h6>{comment.username}</h6>
            <span className="text-muted">
              {comment.date_formatted ? comment.date_formatted : 'Just now'}
            </span>
          </div>
          <p className="card-text text-start mt-2">{comment.text}</p>
          <Divider />
          <Button
            variant="danger"
            onClick={() => {
              commentService.deleteComment(comment.id);
              deleteComment(comment.id);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Comment;
