import React from 'react'
import { Button } from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'


const Delete = () => {
    const {id}=useParams()
    const navigate=useNavigate()

    
    const handleDelete=(id)=>{
        axios.delete(`https://baby-care.onrender.com/api/baby/delete-babyproducts/${id}`)
        .then((response)=>
         navigate('/Products'))
        
       
    }
  return (
    <div>
 <center>
        <div className='alert'>
            <h2>Confirm to delete this Product</h2>
             <Button  onClick={()=>handleDelete(id)} variant="danger">Confirm</Button>
             <Button variant='success'>Cancel</Button>
        </div>
        </center>

    </div>
  )
}

export default Delete