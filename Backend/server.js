const express = require("express");
const cors = require("cors");
const user = require("./Routes/user");
const login = require("./Routes/login");
const createProduct = require("./Routes/create_product");
const getUser = require("./Routes/getUser");
const salary = require("./Routes/salary");
const productDetails = require("./Routes/productdetail");
const getProduct = require("./Routes/get_products");

const app = express();
app.use(express.json());
app.use(cors());
app.use(user);
app.use(login);
app.use(createProduct);
app.use(getUser);
app.use(salary);
app.use(productDetails);
app.use(getProduct);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
