import React from "react";
import { Card } from "react-bootstrap";
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <Card className="bgcolor" style={{ marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title>Baby care</Card.Title>
          <Card.Text>
          From newborn to toddler,our care lasts all the way.
          </Card.Text>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FaFacebook size={36} />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram  size={36} />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitter size={36}  />
            </a>
          </div>
        </Card.Body>
        
      </Card>
      <br />
    </div>
  );
}
export default App;
