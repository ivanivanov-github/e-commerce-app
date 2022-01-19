const { dbService } = require("./database.service");

const CART_PRODUCTS_COLLECTION = "cartProducts";

class CartService {
  constructor() {
    this.dbService = dbService;
  }

  get collection() {
    return this.dbService.db.collection(CART_PRODUCTS_COLLECTION);
  }

  async getAllCartProducts() {
    try {
      return await this.collection.find({}).toArray();
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCartProductById(id) {
    try {
      await this.collection.deleteOne({ id: parseInt(id) });
      return this.collection;
    } catch (err) {
      console.log(err);
    }
  }

  async addNewCartProduct(cartProduct) {
    try {
      await this.collection.insertOne(cartProduct);
    } catch (err) {
      console.log(err);
    }
  }

  async resetCartProducts() {
    try {
      await this.collection.deleteMany({});
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = { CartService };
