import React from "react";
import "../style.css";

export default function Signup() {
  return (
    <div className="login-bg-img">
      <div className="login-container">
        <div className="image-container">
          <img alt="login" src="img/shoes.jpg" id="login-img" />
          <h1 className="title">E-COMMERCE</h1>
        </div>
        <form className="form-group">
          <h2 className="text-center">Sign up</h2>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" onChange={() => {}} required />

          <label htmlFor="password">Password:</label>
          <input type="text" id="password" onChange={() => {}} required />

          <label htmlFor="password-confirm">Confirm Password:</label>
          <input type="text" id="password" onChange={() => {}} required />
        </form>
      </div>
    </div>
  );
}
