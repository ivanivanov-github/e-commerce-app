const HTTPInterface = {
  SERVER_URL: "http://localhost:5000/api",

  async GET(endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`);
    return response.json();
  },

  async POST(endpoint, data) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  },

  async DELETE(endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "DELETE",
    });
    return response.status;
  },

  async PATCH(endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "PATCH",
    });
    return response.status;
  },

  async PATCH(endpoint, data) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.status;
  },
};

class HTTPService {
  constructor() {
    this.products = [];
    this.productsBaseUrl = "products";
    this.passwordBaseUrl = "password";
    this.cartBaseUrl = "cart";
  }

  async fetchAllProducts() {
    try {
      return await HTTPInterface.GET(`${this.productsBaseUrl}`);
    } catch (error) {
      return this.products;
    }
  }

  async getProductByID(id) {
    return HTTPInterface.GET(`${this.productsBaseUrl}/${id}`);
  }

  async getProductsByCategory(category) {
    if (!category) {
      return this.fetchAllProducts();
    }

    try {
      return await HTTPInterface.GET(
        `${this.productsBaseUrl}/category/${category}`
      );
    } catch (error) {
      return this.products;
    }
  }

  async addNewProduct(newProduct) {
    try {
      await HTTPInterface.POST(`${this.productsBaseUrl}`, newProduct);
    } catch (error) {
      console.log("An error occured while POSTING new product", error);
    }
  }

  async deleteProduct(id) {
    try {
      await HTTPInterface.DELETE(`${this.productsBaseUrl}/${id}`);
    } catch (error) {
      console.log("An error occured while DELETING product", error);
    }
  }

  async resetProducts() {
    try {
      await HTTPInterface.PATCH(`${this.productsBaseUrl}/admin/reset`);
    } catch (error) {
      console.log("An error has occured while reseting products", error);
    }
  }

  async checkPassword(passwordInput) {
    try {
      return await HTTPInterface.POST(`${this.passwordBaseUrl}`, {
        passwordInput,
      });
    } catch (error) {
      console.log("An error has occured during your authentication", error);
    }
  }

  async addNewComment(newComment) {
    try {
      return await HTTPInterface.PATCH(
        `${this.productsBaseUrl}/comment`,
        newComment
      );
    } catch (error) {
      console.log(
        "An error has occured the PATCHING of a product due to a comment being added",
        error
      );
    }
  }

  async addProductToCart(addedProduct) {
    try {
      await HTTPInterface.POST(`${this.cartBaseUrl}`, addedProduct);
    } catch (error) {
      // console.log('An error occured while POSTING new product to cart', error);
    }
  }

  async fetchAllCartProducts() {
    try {
      return await HTTPInterface.GET(`${this.cartBaseUrl}`);
    } catch (error) {
      return this.products;
    }
  }

  async deleteProductFromCart(id) {
    try {
      await HTTPInterface.DELETE(`${this.cartBaseUrl}/${id}`);
    } catch (error) {
      console.log("An error occured while DELETING product from cart", error);
    }
  }

  async resetAllProductsFromCart() {
    try {
      await HTTPInterface.PATCH(`${this.cartBaseUrl}/reset`);
    } catch (error) {
      console.log(
        "An error occured while DELETING all products from cart",
        error
      );
    }
  }
}

const httpService = new HTTPService();
export default httpService;
