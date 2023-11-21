import React , { useState }  from 'react'
import './Register.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  
const [error,setError]=useState({})

  const [register,setRegister]=useState({
    username:"",
    name:"",
    email:"",
    password:"",
    phone:""
  })
  const inputChange = (event) => {
    const { name, value } = event.target;
    setRegister({
      ...register,
      [name]: value,
    });
    console.log(register);
  };

  const handleSubmit=(event)=>{
    event.preventDefault()
    const validationErrors={}
    if(!register.username.trim()){
      validationErrors.username ="field is required"
    }
    if(!register.name.trim()){
      validationErrors.name ="field is required"
    }
    if(!register.email.trim()){
      validationErrors.email ="email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(register.email)){
      validationErrors.email ="enter a valid email"
    }
  
    if(!register.password.trim()){
      validationErrors.password ="field is required"
    }
    else if(!register.length<6){
      validationErrors.password ="password should contain atleast 6 characters"
    }
    if(!register.phone.trim()){
      validationErrors.phone ="field is required"
    }
    // else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-ZA-Z0-9]{8,16}$/.test(details.password)){
    //   validationErrors.password ="enter avalid password"
    // }

    setError(validationErrors)
    if(Object.keys(validationErrors).length===0){
      alert('registerd successfully')
    }
    axios.post(`https://baby-care.onrender.com/api/baby/register`,register)
    .then((response)=>{
      console.log(response);
      navigate("/Login")
    })
  }
  return (
    <div style={{paddingRight:"330px"}}>
         <div className='register-container'>
        <h1>Register</h1>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">User Name </label>
        <input type="text"  id="username" name="username"  onChange={inputChange}  required></input>
        {/* {errors.firstname&&<span>{errors.firstname}<span/>} */}
        {error.username&&<span>{error.username}</span>}
        <label htmlFor=""> Name </label>
        <input type="text"  id="name" name="name" onChange={inputChange} required></input>
        {error.name&&<span>{error.name}</span>}


        <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email"  onChange={inputChange} required></input>
      {error.email&&<span>{error.email}</span>}

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" onChange={inputChange} required></input>
      {error.password&&<span>{error.password}</span>}

      <label htmlFor="phone">Phone:</label>
      <input type="phone" id="phone" name="phone"  onChange={inputChange} required></input>
      {error.phone&&<span>{error.phone}</span>}


      {/* <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" onChange={inputChange} required></input> */}

      <button  type="submit"  onClick={(event)=>{handleSubmit(event)}}>Register</button>
        </form>


        </div>

        </div>
  )
}

export default Register