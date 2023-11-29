import React, {  useEffect,useState} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsCartFill, BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const token = sessionStorage.getItem("token");
  const userRole=sessionStorage.getItem("userRole")
  // console.log(userRole);
  //  const [role, setRole] = useState();
  const [cart,setCart]=useState([])
   const navigate = useNavigate();
   const handleLogout = () => {
    // localStorage.removeItem('token')
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole")

    navigate("/")
    window.location.reload();

  };
  
  useEffect(() => {



    if (token !== null && userRole===1) {
      axios 
        .get("https://baby-care.onrender.com/api/baby/admin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          // setRole(res.data.data.userRole);
          // console.log(role);
          // console.log(res.data.data.userRole)
        });
       
    };
    if(token !==null){
      axios.get("https://baby-care.onrender.com/api/baby/cart",{
        headers: {
          Authorization: `Bearer ${token}`,
        }})
      .then((response)=>{
        console.log(response)
        setCart(response.data.data)
        
      })
      // console.log(cart.length);
  
    }
    
  },[token,userRole]);

  // const token=localStorage.getItem('token')
  return (
    <div>
      <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Link to={"/"}>
      <img src="/newlogo.png" width={80}  alt="" /></Link>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link Link as={Link} to="/">Home</Nav.Link>
             {userRole==1?(
              <>
            <Nav.Link Link as={Link} to="/Products
            "> Admin Products</Nav.Link>
            <Nav.Link Link as={Link} to="/AddProducts">Admin Add Products</Nav.Link>
       </>
       ):(
        <>
            <Nav.Link Link as={Link} to="/ProductList">Products</Nav.Link>
            <Nav.Link Link as={Link} to="/Contact">Contact</Nav.Link> 
        </>
       )}
      <>
      {token?(
        <>
            <Nav.Link Link as={Link} to="/Profile">Profile</Nav.Link> 
            <Nav.Link Link as={Link} onClick={handleLogout}>Logout</Nav.Link> 

             {/* <Link  to="/" onClick={handleLogout}>Logout </Link> */}
             </>
      ):(
        <>

             <Nav.Link Link as={Link} to="/Login">Login</Nav.Link>
             <Nav.Link Link as={Link} to="/Register">Register</Nav.Link>
             </>
             )}
             </>

          </Nav>
          <Nav>
            <Nav.Link  Link as={Link} to="/Cart"> <BsCartFill size={26} color="white" />{cart.length}</Nav.Link>
            
            <Nav.Link  Link as={Link} to="/WishList" eventKey={2}>
              <BsFillHeartFill size={23} color="red" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <>
        {/* <div className="menu-container">
          <ul
            style={{
              width: "1320px",
              float: "none",
              margin: "0px auto;",
              display: "flex",
              fontWeight: "bold",
            }}
          >
            <div className="drop" style={{ fontWeight: "bold" }}>
              <Dropdown>
                <Dropdown.Toggle variant="#ffd91c" id="dropdown-basic">
                  ALL CATEGORIES
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <li>BOY FASHION</li>
            
            <li>GIRL FASHION</li>
            <li>FOOTWEAR</li>
            <li>TOYS</li>
            <li>DIAPERING</li>
            <li>GEAR</li>
            <li>FEEDING</li>
            <li>BATH</li>
            <li>NURSERY</li>
            <li>MOMS</li>
            <li>HEALTH</li>
            <li>BOUTIQUE</li>
          </ul>
        </div> */}
      </>
    </div>
  );
};

export default Header;
