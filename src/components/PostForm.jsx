import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import postService from "../features/postService";

const PostForm = ({ post }) => {
  const [formData, setFormData] = useState({
    title: post.title,
    image: post.image,
    text: post.text,
    published: post.published,
  });

  const { title, text, published } = formData;

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.type === "file"
          ? e.target.files[0]
          : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postService.editPost(post.id, formData);
  };

  return (
    <>
      <Form
        style={{ maxWidth: "25rem" }}
        className="m-auto"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
        <Form.Group className="mb-1">
          <Form.Label htmlFor="image">Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Image"
            name="image"
            id="image"
            onChange={handleOnChange}
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
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default PostForm;
