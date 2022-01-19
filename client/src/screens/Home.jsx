import React, { useState } from "react";
import { Tokens } from "../Auth_Tokens/Tokens";
import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import NavBar from "../components/NavBar";
import PageFooter from "../components/PageFooter";
import CategoryButtonGroup from "../components/CategoryButtonGroup";
import ProductCard from "../components/ProductCard";
import httpService from "../services/http.service";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  let history = useHistory();

  React.useEffect(async () => {
    setIsLoading(true);
    setProducts(await httpService.fetchAllProducts());
    setIsLoading(false);
  }, []);

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    setIsLoading(true);
    setProducts(await httpService.getProductsByCategory(category));
    setIsLoading(false);
  };

  if (Tokens.users[0].user1.user1AuthToken) {
    return (
      <div className="home-footer-container">
        <div className="home-container">
          <NavBar />
          <main>
            <section className="products-type" aria-label="Filtres">
              <CategoryButtonGroup
                selectedCategory={selectedCategory}
                handleClick={handleCategoryChange}
              />
            </section>
            <article>
              <span className="right-header">
                {products.length} product{products.length > 1 ? "s" : ""}
              </span>
              <h1>Products</h1>
              <div className="products">
                {isLoading ? (
                  <div className="loader-container">
                    <CircularProgress color="success" />
                  </div>
                ) : (
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                )}
              </div>
            </article>
          </main>
        </div>
        <PageFooter className="footer-container"/>
      </div>
    );
  } else {
    history.push("/erreur");
    return null;
  }
}
