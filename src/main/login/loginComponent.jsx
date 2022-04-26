import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import constants from "../constants";

const LoginComponent = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    return fetch(`${constants.API_BACKEND}/dj-rest-auth/login/`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.key) {
          props.setToken(responseData.key);
        }
      })
      .catch((error) => console.log("error ->", error));
  }
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <br />
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            name="username"
            onChange={handleInputChange}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange}
          />
        </Form.Group>

        <br />
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};
export default LoginComponent;
