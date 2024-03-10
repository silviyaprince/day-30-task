import React from 'react'

import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
function Create() {
  const [values, setValues] = useState({
    name:'',
    username:'',
    email:'',
    phone:'',
    address:'',

    })
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
event.preventDefault();
axios.post ('https://65b39610770d43aba47a0e06.mockapi.io/user', values) 
.then (res => {
  console.log(res)
  navigate('/')
}) 
. catch(err => console.log(err)) ;
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content -center align-items-center bg-light'>
<div className= 'w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
<h1>Add a User</h1> 
<form onSubmit={handleSubmit}> 
<div className= 'mb-2'>
<label htmlFor="name">Name:</label>
<input type="text" name= 'name' className=' form-control' placeholder='Enter Name'
onChange={e => setValues ({...values, name: e.target.value})}/>
 </div> 
 <div className= 'mb-2'>
<label htmlFor="username">UserName:</label>
<input type="text" name= 'username' className=' form-control' placeholder='Enter User Name'
onChange={e => setValues ({...values, username: e.target.value})}/>
 </div> 
 <div className='mb-2'>
<label htmlFor= "email">Email:</label>
<input type="email" name= 'email' className='form-control' placeholder='Enter Email'
onChange={e => setValues ({...values, email: e.target.value})}/>
 </div>
<div className= 'mb-3'>
<label htmlFor="email">Phone: </label>
<input type="text" name= 'phone' className=' form-control' placeholder='Enter Phone'
onChange={e => setValues ({...values, phone: e.target.value})}/>
</div>
<div className= 'mb-2'>
<label htmlFor="address">Address:</label>
<input type="text" name= 'address' className=' form-control' placeholder='Enter Address'
onChange={e => setValues ({...values, address: e.target.value})}/>
 </div> 
<button className='btn btn-success'>Submit</button>
<Link to="/" className='btn btn-primary ms-3'>Back</Link>
</form>
</div>
</div>
  )
}

export default Create