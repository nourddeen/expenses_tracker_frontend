import SingleExpenseContainer from "../singleExpenseComtainer/singleExpenseContainer";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import NewExpense from "../newExpense/newExpense";
import UpdateCategory from "../editCategory/editCategory";

const ExpenseListContainer = (props) => {
  const [modalShowCreate, setModalShowCreate] = useState(false);
  const [modalShowEdit, setModalShowEdit] = useState(false);

  return (
    <div key={props.category.id}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.expenses.map((expense) => {
            return (
              <SingleExpenseContainer
                key={expense.id}
                expense={expense}
                deleteExpense={props.deleteExpense}
                updateExpense={props.updateExpense}
              ></SingleExpenseContainer>
            );
          })}
        </tbody>
      </Table>
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary" onClick={() => setModalShowCreate(true)}>
          Add Expense
        </Button>
        <Button variant="info" onClick={() => setModalShowEdit(true)}>
          Edit Category
        </Button>
        <Button
          variant="danger"
          onClick={() => props.deleteCategory(props.category.id)}
        >
          Delete Category
        </Button>
      </ButtonGroup>
      <NewExpense
        show={modalShowCreate}
        categoryid={props.category.id}
        onHide={() => setModalShowCreate(false)}
        createNewExpense={props.createNewExpense}
      />
      <UpdateCategory
        show={modalShowEdit}
        category={props.category}
        onHide={() => setModalShowEdit(false)}
        updateCategory={props.updateCategory}
      />
    </div>
  );
};

export default ExpenseListContainer;
