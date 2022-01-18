import React from "react";
import { NavLink } from "react-router-dom";

export default function NonExistingPage() {
  return (
    <div className="error-container">
      <div className="inner-error-container">
        <p>The url you searched up doesn't exist. Please log back in.</p>
        <NavLink to={"/"}>
          <button type="button" className="btn">
            Back to login page
          </button>
        </NavLink>
      </div>
    </div>
  );
}
