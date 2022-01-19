import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/auth.service";
import { Tokens } from "../Auth_Tokens/Tokens";
import "../style.css";

export default function Login() {
  const [loginInfos, setLoginInfos] = useState({
    user: "",
    password: "",
  });
  let history = useHistory();

  async function handleAuthorized() {
    const authResult = await authService.checkPassword(loginInfos);
    if (!authResult.result) {
      window.alert("Wrong credentials, try again");
    } else {
      Tokens.users[0].user1.user1AuthToken = true;
      history.push("/home");
    }
  }

  const handleChange = (e) => {
    // console.log(process.env.API_URL)
    const loginInfosCopy = { ...loginInfos };
    loginInfosCopy[e.target.id] = e.target.value;
    setLoginInfos(loginInfosCopy);
  };

  return (
    <>
      <div className="login-bg-img">
        <div className="login-container">
          <div className="image-container">
            <img alt="login" src="img/shoeslogin.png" id="login-img" />
            <h1 className="title">E-COMMERCE</h1>
          </div>
          <div className="form-button-container">
            <form className="form-group">
              <h2 className="text-center">Sign in</h2>
              <label htmlFor="email">Email :</label>
              <label htmlFor="testUserName">(user@gmail.com)</label>
              <input
                type="text"
                id="user"
                value={loginInfos.user}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />

              <label htmlFor="password">Password :</label>
              <label htmlFor="testPassword">(password: 1234)</label>
              <input
                type="text"
                id="password"
                value={loginInfos.password}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />
            </form>
            <button className="bn1 bn2" onClick={handleAuthorized}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
