const express = require("express");
const cors = require("cors");
const user = require("./Routes/user");
const login = require("./Routes/login");
const createProduct = require("./Routes/create_product");
const getUser = require("./Routes/get/getUser");
const salary = require("./Routes/salary");
const productDetails = require("./Routes/productdetail");
const getProduct = require("./Routes/get/get_products");
const exp = require("./Routes/exp");
const notice = require("./Routes/notice");
const vendor = require("./Routes/vendor");
const sales = require("./Routes/sales");
const customer = require("./Routes/custmer");

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
app.use(exp);
app.use(notice);
app.use(vendor);
app.use(sales);
app.use(customer);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
