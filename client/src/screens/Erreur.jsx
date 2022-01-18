import React from "react";
import { NavLink } from "react-router-dom";

function Erreur() {
  return (
    <div className="error-container">
      <div className="inner-error-container">
        <p>
          You've likely posted a comment, removed a product from your cart,
          added a product to the market or refreshed a page. In that case we log
          you automatically out! Please log back in.
        </p>
        <NavLink to={"/"}>
          <button type="button" className="btn">
            Back to login page
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Erreur;
