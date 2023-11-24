import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
    console.log(login);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`https://baby-care.onrender.com/api/baby/login`, login)
      .then((response) => {
        console.log(response);
        // localStorage.setItem("token", response.data.token);
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("userRole", response.data.userRole);

        if (response.status === 200) {
          toast.success("logged in  successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 3000)
        }
        
        // event.preventDefault();

        // window.location.reload();
      });
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <br />
      <ToastContainer />

      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="newlogo.png"
                          style={{ width: 185 }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          We are Baby Care Team
                        </h4>
                      </div>
                      <form>
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            className="form-control"
                            name="username"
                            onChange={inputChange}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            onChange={inputChange}
                          />
                        </div>
                        <div className="text-center pt-1 mb-6 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-"
                            type="button"
                            onClick={(event) => {
                              handleSubmit(event);
                            }}
                          >
                            Log in
                          </button>
                          <span>
                            {" "}
                            <a className="text-muted" href="#!">
                              Forgot password?
                            </a>{" "}
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link to={"/Register"}>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              Create new
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        The goal of well-baby care is to help children stay
                        healthy in their earliest years, so they can grow into
                        healthy adults. These visits evolve and change with your
                        child based on their age and unique needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      {/* <div style={{ backgroundColor: "" }}>
        <img src="/carousel4edit.png" alt="" style={{ width:"100%" }} />
      </div> */}
      {/* <div className="logincards" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="logincard1.webp" />
      <Card.Body>
        <Card.Title>
        </Card.Title>
        <Card.Text>
        Prime Picks For Little Peeps|4-14y

        </Card.Text>
        <Button Link as={Link} to="/ProductList" variant="primary">View</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="logincard2.webp" />
      <Card.Body>
        <Card.Title>
        </Card.Title>
        <Card.Text>
      Mega Offer|Up To 14Y
        </Card.Text>
        <Button Link as={Link} to="/ProductList" variant="primary">View</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="logincard3.webp" />
      <Card.Body>
        <Card.Title>
        </Card.Title>
        <Card.Text>
          Tiny Hands,Big Style|Up To 14Y 
        </Card.Text>
        <Button Link as={Link} to="/ProductList" variant="primary">View</Button>
      </Card.Body>
    </Card> */}
      {/* </div> */}
    </div>
  );
};

export default Login;
