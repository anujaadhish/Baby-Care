import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

const WishList = () => {
  const token =sessionStorage.getItem("token")
  const [wishlist,setWishList]=useState([])

  useEffect(()=>{
    if(token!==null){

    axios.get('https://baby-care.onrender.com/api/baby/wishlist',
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
    )
    .then((res)=>{
      console.log(res)
      setWishList(res.data.data)
    })
  }
  },[token])
  return (
    <>
    {token && wishlist.length !==0?(
    <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",}}>
      <>
      {wishlist.map((item)=>(
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/images/${item.image}`} />
            <Card.Body>
              <Card.Title>
                {item.category}
              </Card.Title>
              <Card.Text>
              {item.brand}
              </Card.Text>
              <Card.Text>
              {item.price}
              </Card.Text>
              <Card.Text>
              {item.product}
              </Card.Text>
              <Card.Text>
              {item.quantity}
              </Card.Text>
            </Card.Body>
          </Card>
    ))}
    </>
    </div>
    </>
    ):(<>
      <h1>Your WishList is empty</h1>
      <div style={{textAlign:"center"}}>

      <Button Link as={Link} to="/ProductList" >Add Now</Button>
     </div>
      </>
    )}
    </>
  )
}

export default WishList