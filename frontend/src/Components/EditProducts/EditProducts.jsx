import React, {useEffect,useState}from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './EditProducts.css'



const EditProducts = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        // category: "",
        // brand: "",
        // productName: "",
        // price: "",
        // image:""
      });
      useEffect(() => {
        axios
          .get(`https://baby-care.onrender.com/api/baby/view-singlebabyproducts/${id}`)
          .then((response) => {
            console.log(response);
            setProduct(response.data.data);
          });
      }, [id]);

      const inputChange = (event) => {
        const { name, value } = event.target;
        setProduct({
          ...product,
          [name]: value,
        });
        console.log(product);
      };
      const handleImage=(event)=>{
        setProduct({...product,image:event.target.files[0]})
        console.log(product.image);
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        const formData= new FormData()
        formData.append('category',product.category)
        formData.append('brand',product.brand)
        formData.append('productName',product.productName)
         formData.append('image',product.image)
        axios
          .put(`https://baby-care.onrender.com/api/baby/update-babyproducts/${id}`,formData)

          .then(() => {
            navigate("/Products");
          });
      };


  return (
    <div>
        
        <form className="form" onSubmit={(event)=>{handleSubmit(event)}}>
        <label for="">Category</label>
        <br />
        <input
          class="#"
          type="text"
          name="category"
          id=""
          value={product.category}
          placeholder="Category"
          onChange={inputChange}
        />
        <br />
        <br />
        <label for="">Brand</label>
        <br />
        <input
          class="#"
          type="text"
          name="brand"
          id=""
          value={product.brand}
          placeholder="Brand"
          onChange={inputChange}
        />
        <br />
        <br />
        <label for="">Product</label>
        <br />
        <input
          type="text"
          name="productName"
          value={product.productName}
          placeholder="Product"
          onChange={inputChange}
        />
        <br />
        <br />
        <label for="">Price</label>
        <br />
        <input
          type="text"
          name="price"
          value={product.price}
          placeholder="Price"
          onChange={inputChange}
        />{" "}
        <br />
        <br />
       
        <br />
        <br />
        <label for="">Upload File</label>
        <br />
        <input  type="file" name="image"accept=".png,.jpg,.jpeg" onChange={handleImage}  />
        <br />
        <br />
        <div>
          <button type="submit" >
            UPDATE
          </button>
          

        </div>
      </form>
    </div>
  )
}

export default EditProducts