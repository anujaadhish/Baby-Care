import React,{useState} from 'react'
// import Table from 'react-bootstrap/Table';


const CheckOut = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    creditCardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <div>
      <center>
         {/* <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}

<h2>Checkout</h2>
      <form onSubmit={handleFormSubmit}>
        <h3>Billing Information</h3>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <h3>Payment Information</h3>
        <label>
          Credit Card Number:
          <input
            type="text"
            name="creditCardNumber"
            value={formData.creditCardNumber}
            onChange={handleInputChange}
            required
          /></label>
          <br />
          <label>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <h3>Order Summary</h3>

        <button style={{paddingTop:"3px"}} type="submit">Complete Purchase</button>
      </form>
    
      </center>
    </div>
  )
}

export default CheckOut