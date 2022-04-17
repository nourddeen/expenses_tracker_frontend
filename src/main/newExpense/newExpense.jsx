import { Form, Modal, Button } from "react-bootstrap";
import { useState } from "react";
const NewExpense = (props) => {
  const defaultState = {
    amount: "",
    date: "",
    details: "",
    category: props.categoryid,
  };
  const [newExpense, setNewExpense] = useState(defaultState);
  const handleInputChange = (e) => {
    e.preventDefault();
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
    });
  };
  const submitNewExpense = (e) => {
    e.preventDefault();
    props.createNewExpense(newExpense);
    setNewExpense(defaultState);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitNewExpense}>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Amount"
              name="amount"
              onChange={handleInputChange}
              value={newExpense.amount}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Details"
              name="details"
              onChange={handleInputChange}
              value={newExpense.details}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="Date"
              placeholder="Date"
              name="date"
              onChange={handleInputChange}
              value={newExpense.date}
            />
          </Form.Group>{" "}
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={props.onHide}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default NewExpense;
