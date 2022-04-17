import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarContainer = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <h1>ExpensesTracker</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">home</Nav.Link>
          {/* <Nav.Link href="login">login</Nav.Link>
            <Nav.Link href="signup">sign up</Nav.Link> */}
          <Nav.Link href="/create">Create Category</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavbarContainer;
