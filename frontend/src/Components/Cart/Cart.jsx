import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cart.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { MdDelete} from 'react-icons/md'
// import {useCart} from 'react-use-cart'





const Cart = () => {


    const navigate=useNavigate()
  const token=sessionStorage.getItem('token')
  const[cart,setCart]=useState([])
  // const [cartItems, setCartItems] = useCart();
  // const [subtotal, setSubtotal] = useState(0);

  useEffect(()=>{
    if( token!==null){
    axios.get('http://localhost:4100/api/baby/cart',{
    // axios.get('https://baby-care.onrender.com/api/baby/cart',{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
    )
    .then((response)=>{
      console.log(response)
      
      setCart(response.data.data)
    })
  }
  },[token])
  console.log(cart);


const handleDecrement=(id)=>{
  
axios.put(`https://baby-care.onrender.com/api/baby/quantitydecrement/${id}`)

window.location.reload();
// navigate('/Cart')


}
const handleIncrement=(id)=>{
  axios.put(`https://baby-care.onrender.com/api/baby/quantityincrement/${id}`)
window.location.reload();
// navigate('/Cart')

}
  const handleDelete=(id)=>{
    axios.delete(`https://baby-care.onrender.com/api/baby/delete-cart/${id}`)
    window.location.reload();
    navigate('/Cart')

  }

// const subTotal=()=>{
//   setSubtotal(cart.reduce((total,item)=>total+item.price * item.quantity,0))
// }

  return (
    <div><br />
    <>
    {cart.length !==0 ?(
    <>
      <div className='conatiner1' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        <>
        
        {cart.map((item,index)=>(
 <Card key={index} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`/images/${item.image}`} />
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
         Price: {item.price}
         </Card.Text>
         <Card.Text>
         subtotal: {item.subtotal}
         </Card.Text>
        <Button variant="primary" onClick={()=>handleDecrement(item._id)}>-</Button>
        <span>{item.quantity}</span>
        <Button variant="primary" onClick={()=>handleIncrement(item._id)}>+</Button>

        <MdDelete size={30} color='red' onClick={()=>handleDelete(item._id)}/>
      </Card.Body>
      <Card.Text>
        {/* Sub Total: {item.quantity * item.price} */}
         </Card.Text>
    </Card>
    
    ))}
    
    </>
    </div>
    <h1>Grand Total:{cart.reduce((total, item)=>total+(item.price*item.quantity),0)}</h1>

    <Button Link as={Link} to="/checkout" variant="primary" >Check Out</Button>


   </>    
    ):( 
      <>
      <h1>Your Cart is empty</h1>
      
<div style={{textAlign:"center"}}>
<Button Link as={Link} to="/ProductList" variant="primary" >Add To Your Bag</Button>
</div>
</>
    )}
</>

    </div>
  )
}

export default Cart