import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/auth.service";
import "../style.css";

export default function Login({ authorized }) {
  const [password, setPassword] = useState("");
  let history = useHistory();

  async function handleAuthorized() {
    // const authResult = await authorized(password);
    const authResult = await authService.checkPassword(password);
    console.log(authResult.result);
    if (!authResult.result) {
      history.push("/nope");
      return;
    } else {
      history.push("/produits");
    }
    // return;
  }

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="login-bg-img">
        <div className="login-container">
          <div className="image-container">
            <img alt="login" src="img/shoes.jpg" id="login-img" />
            <h1 className="title">E-COMMERCE</h1>
          </div>
          <div className="form-button-container">
            <form className="form-group">
              <h2 className="text-center">Sign up</h2>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={password}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />

              <label htmlFor="password">Password:</label> 
              <input type="text" id="password" onChange={() => {}} required />

              <label htmlFor="password-confirm">Confirm Password:</label>
              <input type="text" id="password-confirm" onChange={() => {}} required />
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
