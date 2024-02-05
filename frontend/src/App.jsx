import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Form/Signup";
import Home from "./Home";
import Login from "./Form/Login";
import AddProduct from "./Form/AddProduct";
import Salary from "./Form/Salary";
import ProductDetail from "./Form/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/product-details" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
