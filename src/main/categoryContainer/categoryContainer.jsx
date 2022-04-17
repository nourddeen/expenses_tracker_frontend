import { Accordion } from "react-bootstrap";
import ExpenseListContainer from "../expensesListContainer/expenseListContainer";
const CategoryContainer = (props) => {
  return (
    <Accordion defaultActiveKey="1" className="accordian">
      <Accordion.Item eventKey="0" className="accordian-item">
        <Accordion.Header>
          <h5 className="accordian-header">{props.category.name}</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ExpenseListContainer
            category={props.category}
            expenses={props.expenses}
            deleteCategory={props.deleteCategory}
            updateCategory={props.updateCategory}
            createNewExpense={props.createNewExpense}
            deleteExpense={props.deleteExpense}
            updateExpense={props.updateExpense}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default CategoryContainer;
