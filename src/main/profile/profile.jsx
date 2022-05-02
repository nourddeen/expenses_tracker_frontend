import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";

const Profile = (props) => {
  let navigate = useNavigate();
  const [newProfile, setNewProfile] = useState({
    income: "",
  });
  const [updateProfile, setUpdateProfile] = useState({
    income: "",
  });
  const handleInputChange = (e) => {
    setNewProfile({
      ...newProfile,
      [e.target.name]: e.target.value,
    });
    setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
  };
  console.log(props.profile);
  const submitNewProfile = (e) => {
    e.preventDefault();
    if (props.profile === undefined) {
      try {
        console.log("create");
        props.createNewProfile(newProfile);
        navigate("/", { replace: true });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        console.log("update");
        props.updateProfile(props.profile.id, updateProfile);
        console.log(updateProfile);
        navigate("/", { replace: true });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <br />
      <Form onSubmit={submitNewProfile}>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl
            aria-label="Dollar amount (with dot and two decimal places)"
            type="Number"
            placeholder="monthly income"
            name="income"
            onChange={handleInputChange}
            value={updateProfile.income}
          />
        </InputGroup>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Profile;
