import React , { useState }  from 'react'
import './Register.css'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

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
    <div >
         <section
  className="vh-100 bg-image"
  style={{
    backgroundImage:
      'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <form>
              <label className="form-label" htmlFor="form3Example1cg">
                     UserName
                  </label>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example1cg"
                    className="form-control form-control-lg"
                    name='username'
                    onChange={inputChange}
                  />
                   {error.username&&<span>{error.username}</span>}

                  
                </div>
              <label className="form-label" htmlFor="form3Example1cg">
                     Name
                  </label>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example1cg"
                    className="form-control form-control-lg"
                    name='name'
                    onChange={inputChange}
                  />
                         {error.name&&<span>{error.name}</span>}
 
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="form3Example3cg"
                    className="form-control form-control-lg"
                    name='email'
                    onChange={inputChange}
                  />
                       {error.email&&<span>{error.email}</span>}

                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                    name='password'
                    onChange={inputChange}
                  />
                       {error.password&&<span>{error.password}</span>}

                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cdg">
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="form3Example4cdg"
                    className="form-control form-control-lg"
                    name='phone'
                    onChange={inputChange}

                  />
                       {error.phone&&<span>{error.phone}</span>}
                </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in{" "}
                    <a href="#!" className="text-body">
                      <u>Terms of service</u>
                    </a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    onClick={(event)=>{handleSubmit(event)}}
                    style={{paddingBottom:"35px"}}
                  >
                    Register
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <Link to={'/Login'}>
                  <a href="#!" className="fw-bold text-body">
                    <u>Login here</u>
                  </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </div>
  )
}

export default Register