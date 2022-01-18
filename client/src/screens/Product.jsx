import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import NavBar from "../components/NavBar";
import httpService from "../services/http.service";
import { useHistory } from "react-router-dom";
import commentFormService from "../services/commentForm.service";
import addCartService from "../services/addCart.service";

export default function Product() {
  const urlParams = new URLSearchParams(useLocation().search);
  const productId = urlParams.get("id");
  const [product, setProduct] = useState({
    nom: "",
    img: {},
    compagnieRetailer: "",
    prix: "",
    rating: "",
    comments: [],
  });
  const [commentInfos, setCommentInfos] = useState({
    commentIndex: 0,
    productId: productId,
    user: "",
    comment: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();

  React.useEffect(async () => {
    setIsLoading(true);
    const fetchedProduct = await httpService.getProductByID(productId);
    setProduct(fetchedProduct);
    setIsLoading(false);
    getLatestCommentId(fetchedProduct);
    window.scrollTo(0, 0);
  }, []);

  function getLatestCommentId(fetchedProduct) {
    commentInfos.commentIndex = fetchedProduct.comments.length + 1;
  }

  const handleChange = (e) => {
    const commentInfosCopy = { ...commentInfos };
    commentInfosCopy[e.target.id] = e.target.value;
    setCommentInfos(commentInfosCopy);
  };

  const addComment = async (event) => {
    event.preventDefault();
    await commentFormService.submitForm(commentInfos);
    window.location.reload(false);
    history.push("/nope");
  };

  const addProductToCart = async () => {
    await addCartService.addProductToCart(product);
    window.alert(`${product.nom} has been added to your cart!`);
  };

  return (
    <div className="product-container">
      <NavBar />
      <main>
        {isLoading ? (
          <div className="loader-container">
            <CircularProgress color="success" />
          </div>
        ) : (
          <article>
            <h1 className="product-header">{product.nom}</h1>
            <div className="row">
              <div className="col">
                <img
                  className="product-image"
                  alt={product.nom}
                  src={product.img}
                />
              </div>
              <div className="col">
                <p>Company/Retailer: {product.compagnieRetailer}</p>
                <p>{product.prix}$</p>
                <p>{product.rating}/5.0</p>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    addProductToCart();
                  }}
                  id="add-to-cart-btn"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <h2>Comments</h2>
            <h2 className="disclaimer">
              Make sure to resign-in after adding a comment!
            </h2>
            <form className="product-form-group" onSubmit={addComment}>
              <fieldset>
                <label htmlFor="user">User (your username):</label>
                <input
                  type="text"
                  id="user"
                  value={commentInfos.user}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />

                <label htmlFor="comment">Comment:</label>
                <input
                  type="text"
                  id="comment"
                  value={commentInfos.comment}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </fieldset>
              <input
                className="btn"
                id="add-product-btn"
                type="submit"
                value="Add comment"
              />
            </form>
            <div>
              {product.comments.map((comment) => (
                <CommentCard key={comment.commentIndex} comment={comment} />
              ))}
            </div>
          </article>
        )}
      </main>
    </div>
  );
}
