const { dbService } = require("./database.service");
const defaultProducts = require("../data/defaultProducts.json");

const PRODUCTS_COLLECTION = "products";

class ProductsService {
  constructor() {
    this.dbService = dbService;
  }

  get collection() {
    return this.dbService.db.collection(PRODUCTS_COLLECTION);
  }

  async getAllProducts() {
    try {
      return await this.collection.find({}).toArray();
    } catch (err) {
      console.log(err);
    }
  }

  async getProductById(id) {
    try {
      return await this.collection.findOne({ id: parseInt(id) });
    } catch (err) {
      console.log(err);
    }
  }

  async getProductsByCategory(category) {
    try {
      return await this.collection.find({ categorie: category }).toArray();
    } catch (err) {
      console.log(err);
    }
  }

  async deleteProductById(id) {
    try {
      await this.collection.deleteOne({ id: parseInt(id) });
      return this.collection;
    } catch (err) {
      console.log(err);
    }
  }

  async addNewProduct(product) {
    try {
      const newProduct = {
        id: (await this.collection.countDocuments()) + 1,
        ...product,
      };
      await this.collection.insertOne(newProduct);
    } catch (err) {
      console.log(err);
    }
  }

  async addNewComment(comment) {
    try {
      await this.collection.updateOne(
        { id: parseInt(comment.productId) },
        { $push: { comments: comment } }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async resetProducts() {
    await this.collection.deleteMany({});
    this.populateDb();
  }

  async populateDb() {
    await this.dbService.populateDb(
      PRODUCTS_COLLECTION,
      defaultProducts.products
    );
  }
}

module.exports = { ProductsService };
