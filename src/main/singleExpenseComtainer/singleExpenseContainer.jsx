import { Button , ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import EditExpense from "../editExpense/editExpense";

const SingleExpenseContainer = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (      
    <tr key={props.expense.id}>      
      <td>{props.expense.date}</td>
      <td>{props.expense.amount} $</td>
      <td>{props.expense.details}</td>
      <td>
      <ButtonGroup aria-label="Basic example">
          <Button variant="primary" onClick={() => setModalShow(true)}>Edit</Button>
          <Button variant="danger" onClick={()=>props.deleteExpense(props.expense.id)}>Delete</Button>
      </ButtonGroup>
      <EditExpense         
        show={modalShow}
        onHide={() => setModalShow(false)}
        expense={props.expense}
        updateExpense={props.updateExpense}
        />
      </td>
    </tr>
  );
};
export default SingleExpenseContainer;
