import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import httpService from "../services/http.service";
import NavBar from "../components/NavBar";
import CartProductCard from "../components/CartProductCard";
import PageFooter from "../components/PageFooter";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartTotal, setCartTotal] = useState(0.0);

  React.useEffect(async () => {
    setIsLoading(true);
    setCartProducts(await httpService.fetchAllCartProducts());
    setIsLoading(false);
    updateCartTotal();
  }, []);

  React.useEffect(() => {
    updateCartTotal();
  }, [cartProducts]);

  const updateCartTotal = () => {
    cartProducts.forEach((cartProduct) => {
      setCartTotal((cartTotal) => cartTotal + parseFloat(cartProduct.prix));
    });
  };

  return (
    <div className="home-footer-container">
      <div className="home-container">
        <NavBar />
        <main>
          <article>
            <div className="cart-infos right-header right-align">
              <span className="right-header">
                You have added {cartProducts.length} product
                {cartProducts.length > 1 ? "s" : ""} to your cart!
              </span>
              <span className="right-header">
                Cart total: {cartTotal} $
              </span>
              <NavLink to={"/checkout"}>
                <button type="button" className="btn">
                  Proceed to checkout
                </button>
              </NavLink>
            </div>
            <h1>Products in your cart</h1>
            <div className="products">
              {isLoading ? (
                <div className="loader-container">
                  <CircularProgress color="success" />
                </div>
              ) : (
                cartProducts.map((cartProduct) => (
                  <CartProductCard
                    key={cartProduct.id}
                    cartProduct={cartProduct}
                  />
                ))
              )}
            </div>
          </article>
        </main>
      </div>
      <PageFooter className="footer-container"/>
    </div>
  );
}
