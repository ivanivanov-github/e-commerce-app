const express = require("express");
const cors = require("cors");
const { json } = require("express");
const { ROLE, users } = require("./data/data");
const { dbService } = require("./services/database.service");
// const projectRouter = require('./routes/projects')
// const { authUser, authRole } = require('./basicAuth')

const port = 5000;
const SIZE_LIMIT = "50mb";
const app = express();
const { ProductsController } = require("./controllers/products.controller");
const { CartController } = require("./controllers/cart.controller");
const { PasswordController } = require("./controllers/password.controller");
const productsController = new ProductsController();
const cartController = new CartController();
const passwordController = new PasswordController();
const path = require('path');

app.use(cors());

app.use(express.json({ limit: SIZE_LIMIT, extended: true }));

app.use("/api/products", productsController.router);

app.use("/api/cart", cartController.router);

app.use("/api/password", passwordController.router);

// Serve static assets if in production
if(process.env.NODE_END === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(port, () => {
  dbService.connectToServer().then(() => {
    productsController.productsService.populateDb();
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
