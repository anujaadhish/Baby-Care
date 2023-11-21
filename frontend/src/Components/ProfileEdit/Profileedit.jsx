import React,{useState,useEffect} from 'react'
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Profileedit.css'

const Profileedit = () => {
    // const { id } = useParams();
    const token=sessionStorage.getItem("token")
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        // username:"",
        name: "",
        email: "",
        phone: "",
       
      });
      useEffect(() => {
        axios
          .get(`http://localhost:4100/api/baby/profile`,{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          .then((response) => {
            console.log(response);
            setProduct(response.data.data);
           
          });
      }, [token]);
      const inputChange = (event) => {
        const { name, value } = event.target;
        setProduct({
          ...product,
          [name]: value,
        });
        console.log(product);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .put(`http://localhost:4100/api/baby/update-profile/${product._id}`,product,
          )

          .then(() => {
            navigate("/Profile");
          });
      };

  return (
    <div>
  <div className='register-container'>
        <h1>Edit Profile</h1>
        <form action="">
        {/* <label htmlFor="">User Name </label>
        <input type="text"  id="username" name="username"  value={product?.username} onChange={inputChange}  required></input> */}
        <label htmlFor=""> Name </label>
        <input type="text"  value={product?.name} id="name" name="name" onChange={inputChange} required></input>

        <label for="email">Email:</label>
      <input type="email" id="email" value={product?.email} name="email"  onChange={inputChange} required></input>

      {/* <label for="password">Password:</label>
      <input type="password" id="password" name="password" onChange={inputChange} required></input> */}
      <label for="phone">Phone:</label>
      <input type="phone" id="phone" value={product?.phone} name="phone"  onChange={inputChange} required></input>


      {/* <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" onChange={inputChange} required></input> */}

      <button  type="submit"  onClick={(event)=>{handleSubmit(event)}}>Save</button>
        </form>


        </div>



    </div>
  )
}

export default Profileedit