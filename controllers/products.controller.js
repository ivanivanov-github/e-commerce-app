const productsRouter = require("express").Router();
const { HTTP_STATUS } = require("../utils/http");
const { ProductsService } = require("../services/products.service");

class ProductsController {
  constructor() {
    this.productsService = new ProductsService();
    this.router = productsRouter;
    this.configureRouter();
  }

  configureRouter() {
    this.router.get("/", async (req, res) => {
      const products = await this.productsService.getAllProducts();
      res.json(products);
    });

    this.router.post("/", async (req, res) => {
      try {
        if (!Object.keys(req.body).length) {
          res.status(HTTP_STATUS.BAD_REQUEST).send();
          return;
        }
        const newProduct = req.body;
        await this.productsService.addNewProduct(newProduct);
        res.status(HTTP_STATUS.CREATED).send();
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });

    this.router.get("/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const product = await this.productsService.getProductById(id);
        if (!product) res.status(HTTP_STATUS.NOT_FOUND).send();
        else res.json(product);
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });

    this.router.delete("/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const deletedElement = await this.productsService.deleteProductById(id);
        const status = deletedElement.value
          ? HTTP_STATUS.NO_CONTENT
          : HTTP_STATUS.NOT_FOUND;
        res.status(status).send();
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });

    this.router.get("/category/:category", async (req, res) => {
      try {
        const { category } = req.params;
        const products = await this.productsService.getProductsByCategory(
          category
        );
        res.json(products);
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });

    this.router.patch("/admin/reset", async (req, res) => {
      try {
        await this.productsService.resetProducts();
        res.status(HTTP_STATUS.SUCCESS).send();
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });

    this.router.patch("/comment", async (req, res) => {
      try {
        if (!Object.keys(req.body).length) {
          res.status(HTTP_STATUS.BAD_REQUEST).send();
          return;
        }
        const newComment = req.body;
        await this.productsService.addNewComment(newComment);
        res.status(HTTP_STATUS.CREATED).send();
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });
  }
}
module.exports = { ProductsController };
