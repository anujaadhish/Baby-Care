import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Profile = () => {
  const token = sessionStorage.getItem("token");
  const [profile, setProfile] = useState([]);
   useEffect(() => {
    if(token !==null){
    axios
      .get(`https://baby-care.onrender.com/api/baby/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log(response);
        setProfile(response.data.data);
        // setItem(response.data.data.results)
       
      });

    }
  }, [token]);

  // useEffect(()=>{
  //     axios.get(`http://localhost:4100/api/baby/profile`,profile)
  //     .then((res)=>{
  //         console.log(res);
  //     })
  // },[profile])
  
  return (
    <div>
      <center>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/user.jpg" />
          <Card.Body>
            <Card.Title>UserName:{profile.username}</Card.Title>
            <Card.Text>Name: {profile.name}</Card.Text>
            <Card.Text>Email:{profile.email}</Card.Text>
            <Card.Text>Phone:{profile.phone}</Card.Text>

            <Button Link as={Link}  to={`/Profileedit/${profile._id}`} variant="primary">EDIT PROFILE</Button>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
};

export default Profile;
