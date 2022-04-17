import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./newCategoryComponent.css";

const NewCategoryComponent = (props) => {
  let navigate = useNavigate();
  const [newCategory, setNewCategory] = useState({
    name: "",
  });
  const handleInputChange = (e) => {
    setNewCategory({
      [e.target.name]: e.target.value,
    });
  };
  const submitNewCategory = (e) => {
    e.preventDefault();
    try {
      props.createNewCategory(newCategory);
      setNewCategory({
        name: "",
      });
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="create-form">
      <br />
      <Form onSubmit={submitNewCategory}>
        <br />
        <Form.Group>
          <Form.Label>category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Category"
            name="name"
            onChange={handleInputChange}
            value={newCategory.name}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default NewCategoryComponent;
