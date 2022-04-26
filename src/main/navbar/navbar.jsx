import { Navbar, Container, Nav } from "react-bootstrap";
import constants from "../constants";

const NavbarContainer = (props) => {
  const userName = async () => {
    const data = await fetch(`${constants.API_BACKEND}/dj-rest-auth/user`);
    const parsed = data.username.json();
    console.log(parsed);
    return parsed;
  };
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <h1>ExpensesTracker</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          {props.isLoggedIn ? (
            <>
              <Nav.Link href="/">home</Nav.Link>
              <Nav.Link href="/create">create category</Nav.Link>
              <Nav.Link onClick={props.logout}>logout</Nav.Link>
              {/* <Nav>welcome {userName}</Nav> */}
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
