import React,{ useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {BsFillHeartFill} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


const ProductList = () => {
  const navigate=useNavigate()
    const [productData,setProductData]=useState([])
    const token=sessionStorage.getItem('token')
    console.log(token);
    useEffect(()=>{
        axios.get("https://baby-care.onrender.com/api/baby/view-babyproducts")
        .then((response)=>{ 
          setProductData(response.data.data)
          console.log(response.data);
        } 
  
        )},[])


        const handleWishlist = (item) => {
          // event.preventDefault();
          if(token !==null){
          axios
          .post("https://baby-care.onrender.com/api/baby/add-wishlist",item,
          {
            headers:{
              Authorization:`Bearer ${token}`
            },
          }
          ).then((res)=>{
            navigate("/WishList")

            console.log(res.data.data)
          })
        }else navigate("/Login")
        };
       
        return (
    <>
    {/* {token?( */}
      <>
    <div ><br />
    <div className='row'>
      <div>
    <div className="container">
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginBottom:"10px"}}>
    {productData.map((item)=>(
  <Card className='mb-4' key={item._id} style={{ width: '18rem' }}>
  <Link to={`/Singleproducts/${item._id}`}>
      <Card.Img  variant="top" src={`${item.image}`} /></Link>
      <Card.Body>
        <Card.Title>
        {item.productName}

        </Card.Title>
        <Card.Text>
        {item.brand}
        </Card.Text>
        <Card.Text>
        {item.category}

        </Card.Text>
        <Card.Text>
        {item.price}
        </Card.Text>
        <Card.Text>
        {/* {item.quantity}  */}
        </Card.Text>
        
        <Button  Link as={Link} to={`/Singleproducts/${item._id}`} variant='info'>View</Button>

        <Button onClick={()=>{handleWishlist(item)}}  variant="danger"><BsFillHeartFill/></Button>
      </Card.Body>
    </Card>
   ))}

    </div>
    </div>
   </div>
   </div>
      </div>
    </>
    {/* ):(<h1>You've to Login first !</h1>)} */}
    </>

    
  )
}

export default ProductList