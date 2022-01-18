import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <NavLink className="product-link" to={`/product?id=${product.id}`}>
        <h2>{product.nom}</h2>
        <img alt={product.nom} src={product.img} />
        <div className="card-footer">
          <p className="rating">{product.rating}/5.0</p>
          <p className="price">{product.prix} $</p>
        </div>
      </NavLink>
    </div>
  );
}
