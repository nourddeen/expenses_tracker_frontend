import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
const UpdateCategory = (props) => {
  const [updateCategory, setUpdateCategory] = useState({
    name: props.category.name,
    id: props.category.id,
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    setUpdateCategory({
      ...updateCategory,
      [e.target.name]: e.target.value,
    });
  };
  const submitUpdateCategory = (e) => {
    e.preventDefault();
    props.updateCategory(props.category.id, updateCategory);
  };
  return (
    <div className="create-form">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit This Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitUpdateCategory}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleInputChange}
                value={updateCategory.name}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={props.onHide}>
                Submit
              </Button>
            </Modal.Footer>{" "}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default UpdateCategory;
