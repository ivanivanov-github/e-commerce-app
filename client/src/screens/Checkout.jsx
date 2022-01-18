import React, { useState } from "react";
import NavBar from "../components/NavBar";
import httpService from "../services/http.service";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Checkout() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0.0);
  let history = useHistory();

  React.useEffect(async () => {
    setCartProducts(await httpService.fetchAllCartProducts());
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

  const sendOrder = async (event) => {
    event.preventDefault();
    await httpService.resetAllProductsFromCart();
    window.location.reload(false);
    history.push("/nope");
  };

  return (
    <div className="home-container">
      <NavBar />
      <article>
        <h1>Enter your payment information</h1>
        <h2 className="disclaimer">
          Make sure to resign-in after confirming your order!
        </h2>
        <br />
        <h2>Your cart products:</h2>
        <div>
          {cartProducts.map((cartProduct) => (
            <p key={cartProduct.id}>{cartProduct.nom}</p>
          ))}
        </div>
        <h2>Your cart total is {cartTotal} $</h2>
        <form className="product-form-group">
          <fieldset className="form-control">
            <label htmlFor="method">Choose a payment method:</label>
            <select id="method" required>
              <option value="" disabled>
                Choose
              </option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>

            <label htmlFor="nom">Card number:</label>
            <input type="text" id="number" required />

            <label htmlFor="nom">Card expiration date:</label>
            <input type="text" id="expiration" required />

            <label htmlFor="nom">Card security number:</label>
            <input type="text" id="security" required />

            <label htmlFor="nom">Billing address:</label>
            <input type="text" id="billing" required />
          </fieldset>
        </form>
        <NavLink to={"/cart"}>
          <button className="btn">Cancel</button>
        </NavLink>
        <button className="btn" onClick={sendOrder}>
          Confirm Order
        </button>
      </article>
    </div>
  );
}
