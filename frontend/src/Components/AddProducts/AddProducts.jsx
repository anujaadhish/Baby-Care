import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddProducts.css";

const AddProducts = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    // category: "",
    // brand: "",
    // productName: "",
    // price: "",
    // image: "",
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    console.log(product);
  };
  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
    console.log(product.image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("category", product.category);
    formData.append("brand", product.brand);
    formData.append("productName", product.productName);
    formData.append("price", product.price);
    formData.append("image", product.image);

    axios
      .post(`http://localhost:4100/api/baby/add-babyproducts`, formData)
      .then((response) => {
        
        console.log(response);
      });
      event.preventDefault();
      navigate("/Products");

  };
  return (
    <div>
      <center>
        <form className="form">
          <h4>Include Yours</h4>
          {/* <label for="">Category</label> */}
          <br />
          <input
            className="one"
            type="text"
            name="category"
            id=""
            // value={brand.category}
            placeholder="Category"
            onChange={inputChange}
          />
          <br />
          <br />
          {/* <label for="">Brand</label> */}
          <br />
          <input
            className="one"
            type="text"
            name="brand"
            id=""
            // value={brand.carmaker}
            placeholder="Brand"
            onChange={inputChange}
          />
          <br />
          <br />
          {/* <label for="">Product</label> */}
          <br />
          <input
            className="one"
            type="text"
            name="productName"
            // value={brand.model}
            placeholder="Product"
            onChange={inputChange}
          />
          <br />
          <br />
          {/* <label for="">Price</label> */}
          <br />
          <input
            className="one"
            type="text"
            name="price"
            // value={brand.year}
            placeholder="Price"
            onChange={inputChange}
          />{" "}
          <br />
          <br />
          <br />
          <br />
          {/* <label for="">Upload File</label> */}
          <br />
          <input
            type="file"
            name="image"
            className="one"
            accept=".png,.jpg,.jpeg"
            onChange={handleImage}
          />
          <br />
          <br />
          <div className="style">
            <button
              type="submit"
              onClick={(event) => {
                handleSubmit(event);
              }}
              encType="multipart/form-data"
            >  
             Add Product
            </button>
          </div>
        </form>
      </center>
    </div>
  );
};

export default AddProducts;
