import React from "react";
import { NavLink } from "react-router-dom";
import httpService from "../services/http.service";

export default function CartProductCard({ cartProduct }) {
  const removeProductFromCart = async () => {
    await httpService.deleteProductFromCart(cartProduct.id);
    window.location.reload();
  };

  return (
    <div className="product">
      <NavLink className="product-link" to={`/product?id=${cartProduct.id}`}>
        <h2>{cartProduct.nom}</h2>
        <img alt={cartProduct.nom} src={cartProduct.img} />
        <div className="card-footer">
          <p className="price">{cartProduct.prix} $</p>
        </div>
      </NavLink>
      <button
        type="button"
        className="btn"
        onClick={() => {
          removeProductFromCart();
        }}
      >
        Remove product from cart
      </button>
    </div>
  );
}
