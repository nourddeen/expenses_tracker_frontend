import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "../navbar/navbar.css";

const NavbarContainer = (props) => {
  const [newFromDate, setNewFromDate] = useState();
  const [newToDate, setNewToDate] = useState();

  const handleInputChangeFrom = (e) => {
    e.preventDefault();
    setNewFromDate(e.target.value);
  };
  const handleInputChangeTo = (e) => {
    e.preventDefault();
    setNewToDate(e.target.value);
  };
  const submitDates = (e) => {
    e.preventDefault();
    try {
      props.setToDate(newToDate);
      props.setFromDate(newFromDate);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <h2>ExpensesTracker</h2>
        </Navbar.Brand>
        <Nav className="me-auto">
          {props.isLoggedIn ? (
            <>
              <Nav.Link href="/create">create category</Nav.Link>
              <Nav.Link href="/profile">profile</Nav.Link>
              {/* <Nav.Link href="/chart">chart</Nav.Link> */}
              <Nav.Link onClick={props.logout}>logout</Nav.Link>
              <InputGroup className="mb-3">
                <InputGroup.Text>from</InputGroup.Text>
                <FormControl
                  aria-label="First name"
                  type="date"
                  onChange={handleInputChangeFrom}
                />
                <InputGroup.Text>to</InputGroup.Text>
                <FormControl
                  aria-label="First name"
                  type="date"
                  onChange={handleInputChangeTo}
                />
                <Button variant="success" onClick={submitDates}>
                  submit
                </Button>
              </InputGroup>
            </>
          ) : (
            <>
              <Nav.Link href="/">login</Nav.Link>
              <Nav.Link href="/signup">sign up</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavbarContainer;
