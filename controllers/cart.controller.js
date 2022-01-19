const cartRouter = require("express").Router();
const { HTTP_STATUS } = require("../utils/http");
const { CartService } = require("../services/cart.service");

class CartController {
  constructor() {
    this.cartService = new CartService();
    this.router = cartRouter;
    this.configureRouter();
  }

  configureRouter() {
    this.router.get("/", async (req, res) => {
      const cartProducts = await this.cartService.getAllCartProducts();
      res.json(cartProducts);
    });

    this.router.post("/", async (req, res) => {
      try {
        if (!Object.keys(req.body).length) {
          res.status(HTTP_STATUS.BAD_REQUEST).send();
          return;
        }
        const newCartProduct = req.body;
        await this.cartService.addNewCartProduct(newCartProduct);
        res.status(HTTP_STATUS.CREATED).send();
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });

    this.router.delete("/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const deletedElement = await this.cartService.deleteCartProductById(id);
        const status = deletedElement.value
          ? HTTP_STATUS.NO_CONTENT
          : HTTP_STATUS.NOT_FOUND;
        res.status(status).send();
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });

    this.router.patch("/reset", async (req, res) => {
      try {
        await this.cartService.resetCartProducts();
        res.status(HTTP_STATUS.SUCCESS).send();
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });
  }
}
module.exports = { CartController };
