import httpService from "./http.service";

class AddCartService {
  constructor() {
    this.httpService = httpService;
  }

  async addProductToCart(cartProduct) {
    const product = {
      id: cartProduct.id,
      nom: cartProduct.nom,
      src: "",
      compagnieRetailer: cartProduct.compagnieRetailer,
      img: cartProduct.img,
      prix: cartProduct.prix,
    };

    this.httpService.addProductToCart(product);
  }
}

const addCartService = new AddCartService();
export default addCartService;
