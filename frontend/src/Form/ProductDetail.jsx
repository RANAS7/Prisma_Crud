import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [values, setValues] = useState({
    company: "",
    date: "",
    quantity: "",
    price: "",
    selectedProduct: "",
  });

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-products")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    // Validation: Check if any of the required fields is empty
    if (!values.price || !values.quantity || !values.company) {
      alert("Please fill in all the required fields");
      return;
    }

    try {
      console.log("Sending data:", values);
      await axios.post("http://localhost:8080/product-details", values);

      console.log("Salary Successfully Submitted");

      alert("Salary Successfully Submitted");
      navigate("/");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-400 w-screen h-screen">
      <div className="p-3 bg-white w-[28rem] rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="text-center" action="post">
          <div className="mb-3 flex flex-row gap-3 items-center">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              autoComplete="off"
              placeholder="Enter date"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 flex flex-row gap-3 items-center">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              autoComplete="off"
              placeholder="Enter amount"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 flex flex-row gap-3 items-center">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              autoComplete="off"
              placeholder="Enter price"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 flex flex-row gap-3 items-center">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              autoComplete="off"
              placeholder="Enter date"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 flex flex-row gap-3 items-center">
            <label htmlFor="user">User</label>
            <select name="selectedProduct" onChange={handleChange}>
              <option value="">Select User</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.Product_Name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-success bg-slate-400 text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
