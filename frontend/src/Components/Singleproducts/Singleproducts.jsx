import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { BsFillHeartFill } from "react-icons/bs";

const Singleproducts = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const [productData, setProductData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://baby-care.onrender.com/api/baby/view-singlebabyproducts/${id}`)
      .then((response) => {
        setProductData(response.data.data);
      });
  }, [id]);
  const handleSubmit = (product) => {
    // event.preventDefault();
    if (token !== null) {
      axios
        // .post("http://localhost:4100/api/baby/add-cart", productData, {
        .post("https://baby-care.onrender.com/api/baby/add-cart", product, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          navigate("/Cart");
        });
    } 
  };
  // const handleWishlist = (event) => {
  //   event.preventDefault();
  //   if(token !== null){
  //   axios
  //   .post("http://localhost:4100/api/baby/add-wishlist",productData,{
  //     headers:{
  //       Authorization:`Bearer ${token}`
  //     },
  //   }).then((res)=>{
  //     console.log(res.data.data)
  //     navigate("/WishList")
  //   })
  // }else navigate('/Login')
  // };

  return (
    <div>
      <center>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={`${productData.image}`} />
        <Card.Body>
          <Card.Title>{productData.category}</Card.Title>
          <Card.Text>{productData.brand}</Card.Text>
          <Card.Text>{productData.product}</Card.Text>
          <Card.Text>{productData.price}</Card.Text>
          <Card.Text>{productData.quantity}</Card.Text>

          {/* <Button Link as={Link} to={`/Cart/${productData._id}`} onClick={(event)=>{handleSubmit(event)}}  variant="primary">Add to Cart</Button> */}
          <Button
            onClick={() => {
              handleSubmit(productData);
            }}
            variant="primary"
          >
            Add to Cart
          </Button>
          {/* <Button  variant='info'>View</Button> */}
          {/* <Button variant="danger">
            <BsFillHeartFill onClick={(event)=>{handleWishlist(event)}} />
          </Button> */}
        </Card.Body>
      </Card>
      </center>
    </div>
  );
};

export default Singleproducts;
