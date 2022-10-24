import { useState } from 'react';
import postService from '../features/postService';
import { Container } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    text: '',
    published: false,
  });

  const { title, text, published, author } = formData;

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postService.createPost(formData);
    navigate('/');
    navigate(0);
  };

  return (
    <>
      <Container style={{ flex: '1' }}>
        <>
          <Form
            style={{ maxWidth: '25rem' }}
            className="m-auto"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-1">
              <Form.Label htmlFor="author">Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                name="author"
                id="author"
                value={author}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label htmlFor="title">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                id="title"
                value={title}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="text">Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                type="text"
                placeholder="Text"
                name="text"
                id="text"
                value={text}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="switch"
                label="Published"
                name="published"
                checked={published}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Button variant="dark" type="submit">
                Send
              </Button>
            </Form.Group>
          </Form>
        </>
      </Container>
    </>
  );
};

export default NewPost;
