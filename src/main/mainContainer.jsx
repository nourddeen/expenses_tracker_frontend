import { useState } from "react";
import AuthenticatedContainer from "./authenticatedContainer";
import UnAuthenticatedContainer from "./unAuthenticatedContainer";

const MainContainer = () => {
  const [token, setToken] = useState(localStorage.getItem("token")); // TODO: load initial token state from local storage
  const saveToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = () => {
    saveToken("");
  };

  return (
    <div>
      {!!token ? (
        <>
          <AuthenticatedContainer logout={logout} token={token} />
        </>
      ) : (
        <UnAuthenticatedContainer setToken={saveToken} />
      )}
    </div>
  );
};
export default MainContainer;
