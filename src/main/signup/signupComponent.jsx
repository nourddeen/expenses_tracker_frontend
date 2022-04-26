import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./signupComponent.css";
import constants from "../constants";

const SignupComponent = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    return fetch(`${constants.API_BACKEND}/dj-rest-auth/registration/`, {
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
          navigate("/", { replace: true });
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
            // value={user.userName}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            onChange={handleInputChange}
            // value={user.email}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="password1"
            onChange={handleInputChange}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="password2"
            onChange={handleInputChange}
            // value={user.fullName}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};
export default SignupComponent;
