const passwordRouter = require("express").Router();
const { PasswordService } = require("../services/password.service");

class PasswordController {
  constructor() {
    this.productsService = new PasswordService();
    this.router = passwordRouter;
    this.configureRouter();
  }

  configureRouter() {
    this.router.post("/", async (req, res) => {
      if (
        req.body.passwordInput.user === "user@gmail.com" &&
        req.body.passwordInput.password === "1234"
      ) {
        res.status(200).json({ result: true });
      } else {
        res.status(200).json({ result: false });
      }
    });
  }
}
module.exports = { PasswordController };
