import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Product.css";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [roleData, setroleData] = useState([]);

  // const token=localStorage.getItem('token')
  // console.log(token)
  const token = sessionStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    axios
      .get("http://localhost:4100/api/baby/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setroleData(res.data.data.userRole);
        // console.log(res)
        // console.log(res.data.data.userRole)
      });
  }, [token]);

  useEffect(() => {
    axios
      .get("http://localhost:4100/api/baby/view-babyproducts")
      .then((response) => {
        setProductData(response.data.data);
      });
  }, []);

  return (
    <>
      {roleData === 1 ? (
        <>
        <div className="row">
          <div className="column"style={{flexWrap:"wrap",display:"flex"}}>
          {productData.map((item) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`/images/${item.image}`} />
              <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Text>
                  {item.brand}
                </Card.Text>
                <Card.Text>
                  {item.category}
                </Card.Text>
                <Card.Text>
                  {item.price}
                </Card.Text>
                <Button Link as={Link} to={`/EditProducts/${item._id}`} variant="primary">Edit</Button>
        <Button Link as={Link} to={`/Singleproducts/${item._id}`} variant='info'>View</Button>

        <Button   Link as={Link} to={`/Delete/${item._id}`} variant="danger">Delete</Button>
              </Card.Body>
              
            </Card>
          ))}
         
          </div>
          </div>
          <div style={{marginLeft:"700px"}}>
          <Button Link as={Link} to="/AddProducts">
            Add Product
          </Button>
          
          </div>
        </>
      ) : (
        <h1>You've to be an Admin to access this!</h1>
      )}
    </>
  );
};

export default Products;
