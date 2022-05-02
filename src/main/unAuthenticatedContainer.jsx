import NavbarContainer from "./navbar/navbar";
import { Route, Routes } from "react-router-dom";
import SignupComponent from "./signup/signupComponent";
import LoginComponent from "./login/loginComponent";

const UnAuthenticatedContainer = (props) => {
  return (
    <div>
      <NavbarContainer />
      <Routes>
        <Route
          element={<LoginComponent setToken={props.setToken} />}
          path="/"
        />
        <Route
          element={<SignupComponent setToken={props.setToken} />}
          path="/signup"
        />
      </Routes>
    </div>
  );
};
export default UnAuthenticatedContainer;
