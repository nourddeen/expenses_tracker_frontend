import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const EditExpense = (props) => {
  const [updateExpense, setUpdateExpense] = useState({
    amount: props.expense.amount,
    date: props.expense.date,
    details: props.expense.details,
    category: props.expense.category,
    id: props.expense.id,
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    setUpdateExpense({
      ...updateExpense,
      [e.target.name]: e.target.value,
    });
  };
  const submitUpdate = (e) => {
    console.log("here");
    e.preventDefault();
    props.updateExpense(props.expense.id, updateExpense);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit This Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitUpdate}>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Amount"
              name="amount"
              onChange={handleInputChange}
              value={updateExpense.amount}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Details"
              name="details"
              onChange={handleInputChange}
              value={updateExpense.details}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="Date"
              placeholder="Date"
              name="date"
              onChange={handleInputChange}
              value={updateExpense.date}
            />
          </Form.Group>
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
export default EditExpense;
