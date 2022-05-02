import { useState } from "react";
import AuthenticatedContainer from "./authenticatedContainer";
import UnAuthenticatedContainer from "./unAuthenticatedContainer";
import constants from "./constants";
import api from "./api";

const MainContainer = () => {
  const [token, setToken] = useState(localStorage.getItem("token")); // TODO: load initial token state from local storage
  const saveToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = async () => {
    await fetch(`${constants.API_BACKEND}/dj-rest-auth/logout/`, {
      method: "POST",
      headers: api.setAuthHeader(token),
    });
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
