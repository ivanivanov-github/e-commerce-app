import React, { useState } from "react";
import NavBar from "../components/NavBar";
import productFormService from "../services/productForm.service";
import { useHistory } from "react-router-dom";

export default function AddProduct() {
  const [productInfos, setProductInfos] = useState({
    nom: "",
    img: {},
    compagnieRetailer: "",
    categorie: "",
    prix: "",
    rating: "",
    comments: [],
  });
  const imgRef = React.createRef();
  let history = useHistory();

  const handleChange = (e) => {
    const productInfosCopy = { ...productInfos };
    productInfosCopy[e.target.id] =
      e.target.id === "img" ? imgRef.current.files[0] : e.target.value;
    setProductInfos(productInfosCopy);
  };

  const addRecipe = async (event) => {
    event.preventDefault();
    await productFormService.submitForm(productInfos);
    window.location.reload(false);
    history.push("/nope");
  };

  return (
    <div className="add-product-container">
      <NavBar />
      <main>
        <article>
          <h1>Sale your own product</h1>
          <h2 className="disclaimer">
            Make sure to resign-in after adding a product to the market!
          </h2>
          <br />

          <form
            className="product-form-group"
            onSubmit={addRecipe}
          >
            <fieldset className="form-control">
              <legend>Product Information</legend>

              <label htmlFor="nom">Product name:</label>
              <input
                type="text"
                id="nom"
                value={productInfos.name}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />

              <label htmlFor="categorie">Product category:</label>
              <select
                id="categorie"
                value={productInfos.categorie}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              >
                <option value="" disabled>
                  Choose
                </option>
                <option value="Shoes">Shoes</option>
                <option value="Clothes">Clothes</option>
                <option value="Games">Games</option>
                <option value="Sports">Sports</option>
                <option value="Tech">Tech</option>
                <option value="Autre">Autre</option>
              </select>

              <label htmlFor="compagnieRetailer">
                Username of the seller (your username):
              </label>
              <input
                type="text"
                id="compagnieRetailer"
                value={productInfos.compagnieRetailer}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />

              <label htmlFor="prix">Price:</label>
              <input
                type="text"
                id="prix"
                value={productInfos.prix}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />

              <label htmlFor="rating">Rating (out of 5.0):</label>
              <input
                type="text"
                id="rating"
                value={productInfos.rating}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />

              <label htmlFor="img">Product image:</label>
              <input
                type="file"
                id="img"
                accept="image/*"
                onChange={(e) => {
                  handleChange(e);
                }}
                ref={imgRef}
                required
              />
            </fieldset>

            <input
              className="btn"
              id="add-product-btn"
              type="submit"
              value="Add product"
            />
          </form>
        </article>
      </main>
    </div>
  );
}
